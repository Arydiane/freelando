import styled from '@emotion/styled'

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
`
const InputEstilizado = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    margin-bottom: ${props => props.theme.espacamentos.s};
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid; 
    border-color: ${props => props.theme.cores.neutras.a};
    background: ${props => props.theme.cores.branco};
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
`

export const CampoTexto = ({ titulo, valor, onChange, tipo = 'text' }) => {
    return (
        <LabelEstilizada>
            {titulo}
            <InputEstilizado 
                value={valor} 
                onChange={(evento) => onChange(evento.target.value)} 
                type={tipo}
            />
        </LabelEstilizada>
    )
}
