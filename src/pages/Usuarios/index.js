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