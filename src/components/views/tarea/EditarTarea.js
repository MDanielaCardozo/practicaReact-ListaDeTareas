import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { cantidadCaracteres } from './helpers';

const EditarTarea = () => {

    const {id} = useParams();
    console.log(id);

    const [tarea, setTarea] = useState({});
    const URL = process.env.REACT_APP_API_TAREAS;

    const nombreTareaRef = useRef('');

    const navegacion = useNavigate();

    useEffect(() => {
        consultaAPI();
    },[])

    const consultaAPI = async () => {
        try {
            const respuesta = await fetch(URL+'/'+id);
            const dato = await respuesta.json();
            setTarea(dato);
            
        } catch (error) {
            console.log(error)            
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(nombreTareaRef)
        console.log(nombreTareaRef.current)
        console.log(nombreTareaRef.current.value)
        if(cantidadCaracteres(nombreTareaRef.current.value)){
            const tareaEditar = {
                nombreTarea: nombreTareaRef.current.value
            }
            console.log(tareaEditar);

            try {
                const resp = await fetch(`${URL}/${id}`,{
                    method: "PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(tareaEditar)
                    })
                    if(resp.status === 200){
                        Swal.fire(
                            'Tarea editada!',
                            'Su tarea fue correctamente editada',
                            'success'
                          );
                          //redirecciono a la pagina de tareas
                          navegacion('/administrar');
                    }
            } catch (error) {
                console.log(error)
                //mostrar un mensaje al usuario
            }
            //redireccionar a la web de la tabla de tareas
        }else{
            //mostrar un mensaje de error de validacion de datos del usuario
        }        
      }

    return (
        <div className="container">
      <h1 className="display-4 mt-5">Nueva tarea</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId='formNombreTarea'>
          <Form.Label>Tarea*</Form.Label>  
          <Form.Control type="text" placeholder="Ingrese tarea" defaultValue={tarea.nombreTarea} ref={nombreTareaRef}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
    );
};

export default EditarTarea;