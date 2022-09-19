import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { cantidadCaracteres } from "./helpers";

const CrearTarea = () => {

    const [nombreTarea, setNombreTarea] = useState('');
    const [msjError, setMsjError] = useState(false);

    const URL = process.env.REACT_APP_API_TAREAS;

    const navegacion = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if(cantidadCaracteres(nombreTarea)){
        setMsjError(false);

        const nuevaTarea = {
          nombreTarea
        }
        console.log(nuevaTarea);

        try {
          const respuesta = await fetch(URL,{
            method: 'POST',
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevaTarea)
          })

          if(respuesta.status === 201){
            Swal.fire(
              'Producto creado',
              'El producto fue agregado correctamente',
              'succes'
            );
            navegacion('/administrar');
          }
          console.log(respuesta)
        } catch (error) {
          console.log(error)
        }
      }else{
        setMsjError(true);
      }
    };

  return (
    <div className="container">
      <h1 className="display-4 mt-5">Nueva tarea</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Ingrese tarea" onChange={(e) => setNombreTarea(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      {
        (msjError)?(<Alert variant="danger" className="my-4">Debe corregir los datos</Alert>) : null
      }
    </div>
  );
};

export default CrearTarea;
