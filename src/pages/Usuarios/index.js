import './style.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {useEffect, useRef, useState} from "react";
import api from "../../services/api";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {useNavigate} from "react-router-dom";


const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();
    const toast = useRef(null);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("usuarios")

            console.log(response.data);
            setUsuarios(response.data);
        }

        loadUsuarios();

    }, [])

    const cadastrar = () => {
        navigate('/usuarios/cadastro');
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="p-card-content p-card-body card xl:mx-7 xl:p-7 lg:mx-6 lg:p-6 md:mx-5 md:p-5 sm:mx-4 sm:p-5 mx-3 p-3">
                <Button icon="pi pi-plus" className="p-button-rounded p-button-warning"
                        aria-label="Notification" onClick={cadastrar}
                        style={{marginTop: 32, marginBottom: 32}}/>
                <DataTable value={usuarios} stripedRows responsiveLayout="stack" breakpoint="960px">
                    <Column field="id" header="Cod"></Column>
                    <Column field="nome" header="Nome"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="ativo" header="Status"></Column>
                </DataTable>
            </div>
        </>
    )
}
export default Usuarios;