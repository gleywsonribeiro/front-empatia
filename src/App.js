import { ToastContainer } from "react-toastify";
import RouteApp from "./routes";
import 'react-toastify/dist/ReactToastify.css';


import "primereact/resources/themes/lara-dark-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <RouteApp/>
    </div>
  );
}

export default App;
