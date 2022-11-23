import './style.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {useEffect, useRef, useState} from "react";
import api from "../../services/api";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";


const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
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
        debugger
        toast.current.show({severity: 'info', summary: 'Importante', detail: 'Botão está sendo clicado', life: 3000});
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="p-card-content p-card-body card">
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