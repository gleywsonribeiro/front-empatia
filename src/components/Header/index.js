import {useNavigate} from 'react-router-dom';
import './header.css';
import {Menubar} from "primereact/menubar";
import {useState} from "react";
import {Sidebar} from "primereact/sidebar";
import {PanelMenu} from "primereact/panelmenu";
import {Button} from "primereact/button";


function Header() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const navegar = (path) => {
        setVisible(false)
        navigate(path)
    }

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', command: () => navegar('/')},
        {label: 'Login', icon: 'pi pi-fw pi-lock', command: () => navegar('/login')},
        {label: 'Usuários', icon: 'pi pi-fw pi-user', command: () => navegar('/usuarios')},
        {
            label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => {
                alert("Deseja relmente sair");
                navegar('/login')
            }
        },
    ];

    return (
        <div className="card">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <PanelMenu model={items} style={{width:'100%'}}/>
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="mr-2"/>
        </div>
    )
}

export default Header;