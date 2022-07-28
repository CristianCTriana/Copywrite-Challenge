import  '../css/navbar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getResults } from '../actions';

export default function NavBar(){

    const dispatch = useDispatch();

    const [text, setText] = useState('');//estado inicial para controlar el input

    //cambiamos el estado cada vez que el usuario ingresa una letra nueva
    function handleInputChange(event){
        event.preventDefault();
        setText(event.target.value);
    }

    //enviamos el texto ingresado por el usuario
    function handleSubmit(event){
        event.preventDefault();
        if(text !== ''){
            dispatch(getResults(text));
            setText('');
        }else{
            alert('El campo de texto no se puede enviar vacío')
        }
    }

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <input className="form-control" onChange={(event)=>{handleInputChange(event)}} value={text} type="text" placeholder="Text ..."/>
            <button className="btn btn-primary" onClick={(event)=>{handleSubmit(event)}} type="submit">Search</button>
        </nav>
    )
}