import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const ItemTarea = ({tarea, consultarAPI}) => {

    console.log(tarea);
    const {nombreTarea, _id} = {...tarea}
    const URL = process.env.REACT_APP_API_TAREAS;

    const handleDelete = () => {
        Swal.fire({
            title: 'Esta seguro de borrar esta tarea?',
            text: "No puede volver este paso atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'borrar'
          }).then( async (result) => {
            if (result.isConfirmed) {
    
              //realizar la peticion para elimar producto DELETE
              try{
                const parametros = {
                  method: "DELETE"
                }
                const respuesta = await fetch(URL+'/'+_id,parametros);
                if(respuesta.status === 200){
                  Swal.fire(
                    'Tarea eliminada!',
                    'Su tarea fue correctamente eliminada',
                    'success'
                  )
                  //recargar la  tabla de productos
                  consultarAPI();
                }
        
              }catch(error){
                console.log(error)
              }
            }
        })
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{nombreTarea}</td>
            <td>
                <Link to={`/administrar/tarea/editar/${_id}`} className='btn btn-warning me-2'>Editar</Link>
                <Button variant='danger' onClick={handleDelete}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemTarea;