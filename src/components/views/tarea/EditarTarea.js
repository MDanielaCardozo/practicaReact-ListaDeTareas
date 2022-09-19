import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
        }
        
      }

    return (
        <div>
            
        </div>
    );
};

export default EditarTarea;