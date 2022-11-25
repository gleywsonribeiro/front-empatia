import './style.css';
import {Card} from "primereact/card";

const CadastroUsuario = () => {
    return(
        <div>
            <Card title="Novo Usuário" style={{ width: '25rem', marginBottom: '2em' }}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        </div>
    )
}
export default CadastroUsuario