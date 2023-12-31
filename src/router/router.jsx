import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutBase from "../pages/LayoutBase";
import LayoutBaseCadastro from "../pages/cadastro/LayoutBaseCadastro";
import Interesses from "../pages/cadastro/Interesses";
import DadosPessoais from "../pages/cadastro/DadosPessoais"
import Concluido from "../pages/cadastro/Concluido";
import PaginaInicial from "../pages/PaginaInicial/PaginaInicial";
import Pagina404 from "../pages/erros/Pagina404";
import Login from "../pages/Login/Login";
import Perfil from "../pages/area-logada/Perfil";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: Pagina404, 
        children: [
            {
                path: '', 
                element: <PaginaInicial />
            }, 
            {
                path: 'login',
                element: <Login />
            },
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
            }, 
            {
               path: 'area-logada', 
               children: [
                {
                    path: 'perfil', 
                    element: <Perfil />
                }
               ]
            }, 
        ]
    },
]);