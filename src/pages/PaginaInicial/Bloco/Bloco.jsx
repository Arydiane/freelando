import styled from "@emotion/styled"
import { Tipografia } from "../../../components/Tipografia/Tipografia"
import { Row } from "react-grid-system"

const ContainerEstilizado = styled.div`
    text-align: center;
    padding-top: ${props => props.theme.espacamentos.s};
`

export const Bloco = ({ titulo, children }) => {
    return (
        <ContainerEstilizado>
            <Tipografia componente="h2" variante="h2">
                {titulo}
            </Tipografia>
            <Row>
                {children}
            </Row>
        </ContainerEstilizado>
    )
}