import {Link} from 'react-router-dom';
import './header.css';


function Header() {
    return (
        <header>
            <Link className="logo" to="/">PrimeFlix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
            <Link className="favoritos" to="/login">Tela de Login</Link>
            <Link className="favoritos" to="/usuarios">Usuários</Link>
        </header>
    );
}

export default Header;