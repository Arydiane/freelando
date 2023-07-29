import { Col, Row, Container } from "react-grid-system"
import { Tipografia } from "../../../components/Tipografia/Tipografia"
import { Link } from "react-router-dom"
import imagemBanner from "./pessoas.png"
import styled from "@emotion/styled"
import { Botao } from "../../../components/Botao/Botao"

const FigureEstilizada = styled.figure`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.neutras.c};
    color: ${props => props.theme.cores.primarias.b};
    margin: 0;
`

const ImgEstilizado = styled.img`
    max-width: 100%;
`

export const Banner = () => {
    return (
        <FigureEstilizada>
            <Container>
                <Row align='center'>
                    <Col md={5} sm={12}>
                        <figcaption>
                            <Tipografia componente="h1" variante="h1">
                            Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
                            </Tipografia>
                        </figcaption>
                        <Link to="/cadastro">
                            <Botao>
                                Quero me cadastrar!
                            </Botao>
                        </Link>
                    </Col>
                    <Col>
                        <ImgEstilizado src={imagemBanner} alt="" />
                    </Col>
                </Row>
            </Container>
        </FigureEstilizada>
    )
}