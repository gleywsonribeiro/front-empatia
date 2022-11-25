import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";
import Login from "./pages/Login";
import Usuarios from "./pages/Usuarios";
import CadastroUsuario from "./pages/CadastroUsuario";

function RouteApp() {

    

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/filme/:id" element={<Filme />} />*/}
                {/*<Route path="/favoritos" element={<Favoritos />} />*/}
                <Route path="/login" element={ <Login/> }/>
                <Route path="/usuarios" element={ <Usuarios/> }/>
                <Route path="/usuarios/cadastro" element={ <CadastroUsuario/> }/>
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;