import { Link } from "react-router-dom"

export default function About(){
    return (
        <div>
        <h2>This si the about page.</h2>
        <Link to="/home">Go to home by clicking now!!!</Link>            
        </div>
    )
}