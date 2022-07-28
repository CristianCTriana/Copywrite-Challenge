import  '../css/navbar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getResults } from '../actions';

export default function NavBar(){

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    function handleInputChange(event){
        event.preventDefault();
        setText(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(getResults(text));
    }

    return(
        <nav className="navbar navbar-light bg-light">
            <input className="form-control mr-sm-2" onChange={(event)=>{handleInputChange(event)}} type="text" placeholder="Text ..."/>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={(event)=>{handleSubmit(event)}} type="submit">Search</button>
        </nav>
    )
}