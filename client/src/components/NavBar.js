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
        setText('');
    }

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <input className="form-control" onChange={(event)=>{handleInputChange(event)}} value={text} type="text" placeholder="Text ..."/>
            <button className="btn btn-primary" onClick={(event)=>{handleSubmit(event)}} type="submit">Search</button>
        </nav>
    )
}