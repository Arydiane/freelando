import styled from '@emotion/styled'

const BotaoPrimarioEstilizado = styled.button`
    background: ${props => props.theme.cores.primarias.b};
    color: ${props => props.theme.cores.branco};
    border: none;
    border-radius: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }
`

const BotaoSecundarioEstilizado = styled.button`
    background: transparent;
    color: ${props => props.theme.cores.primarias.b};
    border-radius: ${props => props.theme.espacamentos.s};
    border: 2px solid; 
    border-color: ${props => props.theme.cores.primarias.b};
    box-sizing: border-box;
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    &:hover {
        border-color: ${props => props.theme.cores.dark.b};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }
`

export const Botao = ({ children, variante = 'primaria' }) => {
    
    if (variante === 'primaria') {
        return <BotaoPrimarioEstilizado>{children}</BotaoPrimarioEstilizado>
    }

    return <BotaoSecundarioEstilizado>{children}</BotaoSecundarioEstilizado>
}