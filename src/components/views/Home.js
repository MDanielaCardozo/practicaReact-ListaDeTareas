import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './tarea/ItemTarea';

const Home = () => {
    const URL = process.env.REACT_APP_API_TAREAS;
    console.log(URL);
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        consultarAPI();
    },[])

    const consultarAPI = async () => {
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
        <div className='container'>
            <h1 className='display-4 m-4'>Pagina principal</h1>
            <hr />
            <div>
                <ListGroup>
                    {
                       tareas.map((tarea)=><ItemTarea key={tarea._id} tarea={tarea}></ItemTarea>)  
                    }
                </ListGroup>
            </div>
            
        </div>
    );
};

export default Home;