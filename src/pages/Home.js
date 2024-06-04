import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>This has been deployed from Netlify.</h1>
            <Link to="/about">Go to About by clicking me.</Link>
        </div>
    )
}