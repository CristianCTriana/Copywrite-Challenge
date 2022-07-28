import axios from 'axios';

export function getResults(text){
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3001/iecho?text="+text)
            return dispatch({
                type: 'GET_RESULTS',
                payload: json.data
            });
        } catch (error) {
            alert('Error, la palabra ingresada no puede tener simbolos, espacios, números o estar vacía.')
        }
    }
}