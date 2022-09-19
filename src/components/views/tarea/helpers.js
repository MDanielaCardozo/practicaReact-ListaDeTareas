export const cantidadCaracteres = (input) => {
    if( input.length >=5 && input.length <= 150){
     return true; //dato correcto
    }else{
     return false; //dato incorrecto
    }
 }