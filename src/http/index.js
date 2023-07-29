import axios from "axios";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const http = axios.create({
    baseURL: 'http://localhost:8080/'
})

// Adiciona um interceptador na requisição
http.interceptors.request.use(function (config) {
    // adiciona o token ao cabeçalho se ele existir
    const token = ArmazenadorToken.accessToken
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
});

const rotasIgnoradasPelosErros = [
    'auth/login',
    'auth/refresh',
]

const tentaRenovarToken = async () => {
    const token = ArmazenadorToken.refreshToken
    return axios.get('http://localhost:8080/auth/refresh', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(resposta => {
        ArmazenadorToken.definirTokens(
            resposta.data.access_token,
            resposta.data.refresh_token)
    })
}

const lidarComErro401 = async (erro) => {
    await tentaRenovarToken()
        .then(() => http(erro.config))
        
    return Promise.reject(erro)
}

// Adiciona um interceptador na resposta
http.interceptors.response.use((response) => {
    return response;
}, function (error) {
    // Erro é qualquer código de status diferente 2xx. 
    if (!rotasIgnoradasPelosErros.includes(error.config.url) && error.response.status === 401) {
        return lidarComErro401(error)
    }

    return Promise.reject(error);
});

export default http