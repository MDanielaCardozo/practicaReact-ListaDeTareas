import React from 'react';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemTarea from './ItemTarea';

const AdministrarTareas = () => {

    const URL = process.env.REACT_APP_API_TAREAS;
    console.log(URL);
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, [])

    const consultarAPI = async () =>{
        try {
            const respuesta = await fetch(URL);
            const listaTareas = await respuesta.json();
            console.log(respuesta)
            console.log(listaTareas);
            setTareas(listaTareas);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Tareas cargadas</h1>
        <Link to='/administrar/tarea/crear' className="btn btn-primary">Agregar</Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod.</th>
            <th>Tarea</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/* aqui tengo que hacer un map */}
          {
            tareas.map((tarea)=><ItemTarea key={tarea._id} tarea={tarea} consultarAPI={consultarAPI}></ItemTarea>)
          }
        </tbody>
      </Table>
    </section>
    );
};

export default AdministrarTareas;