import './style.css';
import {Button} from 'primereact/button';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


export default function Usuarios() {

    var products = [
        {
            code: 1,
            name: "feijão",
            category: "alimentos",
            quantity: 50
        },
        {
            code: 2,
            name: "arroz",
            category: "alimentos",
            quantity: 522
        }
    ]

    return (
        <div className="button-demo">
            <h1>Teste</h1>
            <div className="card">
                <Button label="Primary" className="p-button-raised p-button-text"/>
                <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text"/>
                <Button label="Success" className="p-button-raised p-button-success p-button-text"/>
                <Button label="Info" className="p-button-raised p-button-info p-button-text"/>
                <Button label="Warning" className="p-button-raised p-button-warning p-button-text"/>
                <Button label="Help" className="p-button-raised p-button-help p-button-text"/>
                <Button label="Danger" className="p-button-raised p-button-danger p-button-text"/>
                <Button label="Plain" className="p-button-raised p-button-text p-button-plain"/>
            </div>

            <div className="p-card-content p-card-body card">
                <DataTable value={products} stripedRows responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    )
}