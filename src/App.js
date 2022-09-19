import { BrowserRoute, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrearTarea from "./components/views/tarea/CrearTarea";
import Home from './components/views/Home';
import AdministrarTareas from './components/views/tarea/AdministrarTareas';
import EditarTarea from './components/views/tarea/EditarTarea';

function App() {
  return (
    <div>
      <BrowserRoute>
        <Menu></Menu>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/administrar' element={<AdministrarTareas></AdministrarTareas>}></Route>
          <Route exact path='/administrar/tarea/crear' element={<CrearTarea></CrearTarea>}></Route>
          <Route exact path='/administrar/tarea/editar/:id' element={<EditarTarea></EditarTarea>}></Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>

        </Routes>
      </BrowserRoute>
    </div>
  );
}

export default App;
