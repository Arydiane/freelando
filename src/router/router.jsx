import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutBase from "../pages/LayoutBase";
import LayoutBaseCadastro from "../pages/cadastro/LayoutBaseCadastro";
import Interesses from "../pages/cadastro/Interesses";
import DadosPessoais from "../pages/cadastro/DadosPessoais"
import Concluido from "../pages/cadastro/Concluido";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ]
    },
]);