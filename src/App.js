import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <section className="container text-center my-5">
        <h1 className="display-1 text-warning">Bienvenidos</h1>
        <p className="display-6 text-secondary">Ingresa tus tareas</p>
        <Formulario></Formulario>
      </section>
    </div>
  );
}

export default App;
