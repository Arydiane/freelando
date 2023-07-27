import { Col } from "react-grid-system"
import { Tipografia } from "../../../../components/Tipografia/Tipografia"
import { Card } from "../../../../components/Card/Card"
import styled from "@emotion/styled"

const SpanEstilizado = styled.span`
    color: ${props => props.theme.cores.primarias.a};
`

export const CardCliente = ({ icone, texto }) => {
    return (
        <Col sm={6} md={6} lg={3} style={{ marginBottom: '24px' }}>
            <Card comBorda={false}>
                {icone}
                <Tipografia componente="body" variante="body">
                    <SpanEstilizado>
                        {texto}
                    </SpanEstilizado>
                </Tipografia>
            </Card>
        </Col>
    )
}