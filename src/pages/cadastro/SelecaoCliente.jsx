import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../components/Tipografia/Tipografia"
import cliente from "./assets/cliente.png"
import freelancer from "./assets/freela.png"
import { Link } from "../../components/Link/Link"
import { Link as RouterLink } from "react-router-dom"
import CabecalhoCadastro from "../../components/CabecalhoCadastro/CabecalhoCadastro"
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario"

const SelecaoCliente = () => {
    
    const { setPerfil } =  useCadastroUsuarioContext()

    return (
        <div style={{ textAlign: 'center' }}>
            <CabecalhoCadastro
                titulo="Crie seu cadastro"
                subtitulo="Como podemos te ajudar?"    
            />
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to="interesses" onClick={() => setPerfil('cliente')}>
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>

                    <img src={freelancer} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou um freela e preciso de clientes!
                    </Tipografia>

                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundaria">Faça login!</Link>
                </p>
            </div>
        </div>
    )
}

export default SelecaoCliente