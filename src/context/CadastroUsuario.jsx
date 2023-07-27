import { useContext, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const usuarioInicial = {
    perfil: '', 
    interesse: '', 
    nomeCompleto: '',
    uf: '', 
    cidade: '',
    email: '', 
    senha: '', 
    senhaConfirmada: '', 
}

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    erros: {}, 
    setPerfil: () => null, 
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    submeterUsuario: () => null,
    possoSelecionarInteresse: () => null,
    possoSelecionarDadosPessoais: () => null,
})

export const useCadastroUsuarioContext = () => {
    return useContext(CadastroUsuarioContext);
}

export const CadastroUsuarioProvider = ({ children }) => {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState(usuarioInicial)
    const [erros, setErros] = useState({})

    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                perfil 
            }
        })
    }

    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
        })
    }

    const setNomeCompleto = (nomeCompleto) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto 
            }
        })
    }

    const setUf = (uf) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
        })
    }

    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade 
            }
        })
    }

    const setEmail = (email) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                 email
            }
        })
    }

    const setSenha = (senha) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha 
            }
        })
    }

    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }

    const submeterUsuario = () => {

        setErros({})
        
        if (usuario.senha.length < 8 ) {
            setErros({ senha: "Senha deve possuir no mínimo 8 caracteres!" })
            return 
        }

        if (usuario.senha !== usuario.senhaConfirmada) {
            setErros({ senhaConfirmada: "Senhas diferentes. Digite a mesma senha em ambos os campos de senha." })
            return
        }

        navigate('/cadastro/concluido')
    }

    const possoSelecionarInteresse = () => {
        return !!usuario.perfil
    }

    const possoSelecionarDadosPessoais = () => {
        return !!usuario.interesse
    }

    const contexto = {
        usuario, 
        erros,
        setPerfil,
        setInteresse, 
        setNomeCompleto, 
        setUf, 
        setCidade, 
        setEmail, 
        setSenha, 
        setSenhaConfirmada,
        submeterUsuario, 
        possoSelecionarInteresse, 
        possoSelecionarDadosPessoais
    }

    return (
        <CadastroUsuarioContext.Provider value={contexto}>
            {children}
        </CadastroUsuarioContext.Provider>
    )
}