import {useEffect, useState} from "react";
import './home.css';
import {Sidebar} from "primereact/sidebar";
import {Button} from "primereact/button";
import {PanelMenu} from "primereact/panelmenu";

// URL: /movie/now_playing?api_key=4604de514f83ba7b74322b0fa18c1cd6&language=pt-BR&page=1

function Home() {
    // const [visible, setVisible] = useState(false);
    // const itensMenu = [{
    //     label: 'Setting 1', items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
    // }, {
    //     label: 'Setting 2', items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
    // }, {
    //     label: 'Setting 3', items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
    // }];
    //
    //
    // return (<div className="card">
    //         <Sidebar visible={visible} onHide={() => setVisible(false)}>
    //             <PanelMenu model={itensMenu} style={{width:'300px'}}/>
    //         </Sidebar>
    //         <Button icon="pi pi-arrow-left" onClick={() => setVisible(true)} className="mr-2"/>
    //     </div>)

    return(
        <h3>
            Use o menu para navegação
        </h3>
    )
}

export default Home;