import axios from 'axios';

export function getResults(text){
    let json = await axios.get("http://localhost:3001/iecho?text="+text)
    return dispatch({
            type: 'GET_RESULTS',
            payload: json.data
        });
}