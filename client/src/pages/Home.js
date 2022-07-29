import NavBar from "../components/NavBar"
import ResultsContainer from "../components/ResultsContainer"
import Instrucciones from "../components/Instrucciones"

export default function Home(){
    return(
        <div>
            <NavBar></NavBar>
            <ResultsContainer></ResultsContainer>
            <Instrucciones></Instrucciones>
        </div>
    )
}