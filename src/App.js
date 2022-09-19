import { BrowserRouter , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Error404 from './components/views/Error404';
import CrearTarea from "./components/views/tarea/CrearTarea";
import Home from './components/views/Home';
import AdministrarTareas from './components/views/tarea/AdministrarTareas';
import EditarTarea from './components/views/tarea/EditarTarea';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/administrar' element={<AdministrarTareas></AdministrarTareas>}></Route>
          <Route exact path='/administrar/tarea/crear' element={<CrearTarea></CrearTarea>}></Route>
          <Route exact path='/administrar/tarea/editar/:id' element={<EditarTarea></EditarTarea>}></Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
