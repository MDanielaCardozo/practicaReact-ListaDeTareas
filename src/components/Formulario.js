import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const Formulario = () => {

    let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];

    const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);
    const [tarea, setTarea] = useState('');

    useEffect(() => {
      localStorage.setItem('listaTareas', JSON.stringify(arregloTareas));
    }, [arregloTareas]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setArregloTareas([...arregloTareas, tarea]);
      setTarea('');
    }

    const borrarTarea = (nombre) => {
      let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombre});
      setArregloTareas(arregloModificado);
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Ingrese tarea" onChange={(e) => setTarea(e.target.value.trimStart())} value={tarea}/>
        </Form.Group>
      </Form>
      <ListaTareas arregloTareas = {arregloTareas} borrarTarea = {borrarTarea}></ListaTareas>
    </div>
  );
};

export default Formulario;
