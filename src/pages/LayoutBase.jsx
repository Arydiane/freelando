import { Col, Container, Row } from "react-grid-system"
import { Cabecalho } from "../components/Cabecalho/Cabecalho"
import { FreelandoLogo } from "../components/Icones/FreelandoLogo"
import { Link } from "../components/Link/Link"
import { Rodape } from "../components/Rodape/Rodape"
import { ItemListaInline } from "../components/Lista/ItemListaInline"
import { Tipografia } from "../components/Tipografia/Tipografia"
import { ListaInline } from "../components/Lista/ListaInline"
import { IconeWhatsApp } from "../components/Icones/IconeWhatsApp"
import { IconeTwitch } from "../components/Icones/IconeTwitch"
import { IconeInstagram } from "../components/Icones/IconeInstagram"
import { IconeTwitter } from "../components/Icones/IconeTwitter"
import { Outlet } from "react-router-dom"

const LayoutBase = () => {
    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo />
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Link>Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
            <Container>
                <Outlet />
            </Container>
            <Rodape>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo height={40} width={176} />
                            <Tipografia variante="legenda" componente="legenda">Desenvolvido por Arydiane Jardim no curso da Alura.</Tipografia>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
                            <ListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeWhatsApp />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Twitch">
                                        <IconeTwitch />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Instagram">
                                        <IconeInstagram />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para o Twitter">
                                        <IconeTwitter />
                                    </a>
                                </ItemListaInline>
                            </ListaInline>
                        </Col>
                    </Row>
                </Container>
            </Rodape>
        </>
    )
}

export default LayoutBase