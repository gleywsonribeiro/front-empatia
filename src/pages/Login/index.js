
import { useState } from 'react';
import './style.css';
import { FiUser, FiLock } from "react-icons/fi";

export default function Login() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function logar(e) {
        e.preventDefault();
        alert(`Usuario: ${usuario} e senha: ${senha}`)
    }

    return (
        <div className='geral'>
            <div className='content'>
                <div className="login-header">Login</div>
                <form onSubmit={logar}>
                    <div className='field'>
                        <span>
                            <FiUser size={18} color="#251545"/>
                        </span>
                        <input type="text" value={usuario} placeholder='Usuário' onChange={(e) => setUsuario(e.target.value)} />
                    </div>
                    <div className='field space'>
                        <span>
                            <FiLock size={18} color="#251545"/>
                        </span>
                        <input type="password" placeholder='Senha' value={senha} className='paas-key' onChange={(e) => setSenha(e.target.value)} />
                        <span className='show'>SHOW</span>
                    </div>

                    <div className='field'>
                        <button className='btn-login'>Entrar</button>
                       {/* <Link to="/">Add</Link>*/}
                    </div>
                </form>
            </div>

        </div>
    )
}