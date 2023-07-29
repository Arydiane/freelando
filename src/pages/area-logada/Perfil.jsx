import { Col, Container, Row } from "react-grid-system";
import { CampoTexto } from "../../components/CampoTexto/CampoTexto";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Botao } from "../../components/Botao/Botao";
import styled from "@emotion/styled";
import { Card } from "../../components/Card/Card";
import background from "./assets/perfil-bg.png";
import avatar from "./assets/avatar.png";
import { useEffect } from "react";
import http from "../../http";


const TituloEstilizado = styled.h1`
    background: url(${background}) no-repeat; 
    background-position: center;
    font-size: 40px;
    font-weight: 600;
    line-height: 246px;
    text-align: center;
    margin-top: 0;
`

const ImagemEstilizada = styled.img`
    max-width: 100%;
    margin: 0 auto;
`

const Perfil = () => {

    useEffect(() => {
      
        
        http.get('profile')
            .then( resposta => {
                console.log(resposta.data)
            })
            .catch( erro => {
                console.error(erro)
            })

    }, [])

    const aoSubmeterForm = (evento) => {
        evento.preventDefault();

    }

    return (
        <>
            <TituloEstilizado>
                Meu perfil
            </TituloEstilizado>
            <Container>
                <form onSubmit={aoSubmeterForm}>
                    <Row>
                        <Col sm={12} md={5}>
                            <Card>
                                <div style={{ textAlign: 'center' }}>
                                    <Tipografia componente="h3" variante="h3">
                                        Nome Completo
                                    </Tipografia>
                                    <ImagemEstilizada src={avatar} alt="" />
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={7}>
                            <Tipografia componente="h3" variante="h3">
                                Revise seus dados
                            </Tipografia>
                            <CampoTexto
                                titulo="Nome"
                            />
                            <CampoTexto
                                titulo="Sobrenome"
                            />
                            <Row>
                                <Col sm={12} md={6}>
                                    <CampoTexto
                                        titulo="Celular"
                                    />
                                </Col>
                                <Col sm={12} md={6}>
                                    <CampoTexto
                                        titulo="Email"
                                        tipo="email"
                                    />
                                </Col>
                                <Col sm={12} md={6}>
                                    <CampoTexto
                                        titulo="Código postal"
                                    />
                                </Col>
                                <Col sm={12} md={6}>
                                    <CampoTexto
                                        titulo="País"
                                    />
                                </Col>
                                <Col sm={12} md={6}>
                                    <Botao>
                                        Salvar
                                    </Botao>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
            </Container>
        </>
    )
}

export default Perfil