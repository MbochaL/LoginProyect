import React, {useState} from 'react';
import "./Select.css";

function Select(){

    const [Tipos, setTipos] = useState({Alumno:"", Profesor:""})

    return (
        <div  id='select'>
            <label>Tipos</label>
            <select>
            <option><span>{Tipos.Alumno}</span></option>
            
            </select>
          
        </div>
    );
}

export default Select;
