import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Cardapio' element={<Cardapio />} />
            </Routes>
        </Router>
    );
}