import  '../css/resultsContainer.css';
import ItemList from "./ItemList"
import {useSelector} from "react-redux";

export default function ResultsContainer(){

    const results = useSelector((state) => state.results);

    return(
        <div className="card">
            <h3>Resultados:</h3>
            <div className="">
                <ul className="list-group list-group-flush">
                    {results?.map((result)=>{
                    return <li class="list-group-item"><ItemList text={result.text} isPalindrome={result.palindrome}></ItemList></li>
                })}
                </ul>
            </div>
        </div>
    )
}