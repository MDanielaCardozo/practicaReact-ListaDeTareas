import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ItemTarea = (props) => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                {
                    props.tareaCargada
                }
                <Button variant= 'danger' onClick={()=> props.borrarTarea(props.tareaCargada)}>Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;