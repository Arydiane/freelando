import styled from "@emotion/styled"
import conclusao from "./assets/cliente-concluido.png"
import { Link } from "react-router-dom"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../components/Botao/Botao"
import CabecalhoCadastro from "../../components/CabecalhoCadastro/CabecalhoCadastro"

const ImagemEstilizada = styled.img`
    border-radius: 16px;
    max-width: 100%;
`

const Concluido = () => {
    return (
        <>
            <CabecalhoCadastro
                titulo="Seu perfil está completo!"
                subtitulo="Agora é só começar a se conectar com os melhores freelancers do mercado!"    
            />
            <figure>
                <ImagemEstilizada src={conclusao} alt="" />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to="/cadastro"> 
                        <Botao variante="secundaria">Voltar para a home</Botao>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Concluido