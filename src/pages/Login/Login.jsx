import { Col, Container, Row } from "react-grid-system";
import { Logo } from "./Logo";
import { Card } from "../../components/Card/Card";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { CampoTexto } from "../../components/CampoTexto/CampoTexto";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Botao } from "../../components/Botao/Botao"
import { Link } from "../../components/Link/Link"
import { useSessaoUsuarioContext } from "../../context/SessaoUsuario";

const FormEstilizado = styled.form`
    border-bottom: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    padding-bottom: ${props => props.theme.espacamentos.l};
`

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { login } = useSessaoUsuarioContext()

    const tentarEfetuarLogin = async (evento) => {
        evento.preventDefault(); 
        login(email, senha)
    }

    return (
        <Container>
            <Row justify="center">
                <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Logo />
                    </div>
                    <Card>
                        <div style={{ textAlign: 'center' }}>
                            <Tipografia componente="h1" variante="h1">
                                Efetuar Login
                            </Tipografia>
                        </div>
                        <FormEstilizado onSubmit={tentarEfetuarLogin}>
                            <CampoTexto
                                titulo="Email"
                                valor={email}
                                onChange={setEmail}
                                tipo="email"
                            />
                            <CampoTexto
                                titulo="Senha"
                                valor={senha}
                                onChange={setSenha}
                                tipo="password"
                            />
                            <div style={{ textAlign: 'right' }}>
                                <RouterLink to="">
                                    <Tipografia componente="legenda" variante="legenda">
                                        Esqueceu sua senha?
                                    </Tipografia>
                                </RouterLink>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Botao>
                                    Login
                                </Botao>
                            </div>
                        </FormEstilizado>
                        <div style={{ textAlign: 'center' }}>
                            <Tipografia componente="body2" variante="body2">
                                Ainda não criou sua conta no Freelando?
                            </Tipografia>
                            <RouterLink to="/cadastro">
                                <Link variante="secundario">
                                    Cadastre-se clicando aqui!
                                </Link>
                            </RouterLink>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login