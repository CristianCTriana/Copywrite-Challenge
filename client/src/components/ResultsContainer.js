import ItemList from "./ItemList"
import  '../css/resultsContainer.css';
import {useSelector} from "react-redux";

export default function ResultsContainer(){

    const results = useSelector((state) => state.results);

    return(
        <div className="card">
            <h3>Resultados:</h3>
            <div className="listContainer">
                <ul class="list-group list-group-flush">
                    {results?.map((result)=>{
                    return <li class="list-group-item"><ItemList text={result.text}></ItemList></li>
                })}
                </ul>
            </div>
        </div>
    )
}