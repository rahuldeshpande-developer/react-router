import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function VanDetails(){

    const parameters = useParams()
    console.log(parameters)

    const [vanData, setVanData] = useState(null)

    useEffect(() => {
        console.log('fetching the data')
        fetch(`/api/vans/${parameters.id}`)
            .then(response => response.json())
            .then(data => setVanData(data.vans))
    }, [parameters.id])

    return (
            vanData ?
                (   <div>
                        <div className="van-container">
                        <img className="van-image" src = {`${vanData.imageUrl}`} />
                        <h3>{vanData.name} ${vanData.price} CAD</h3>
                        <p>{vanData.description}</p>
                    </div>
                    <Link to="/vans">Go Back and See All Vans</Link>
                    <Link to = "/vans/4">View Van of id = 4</Link>
                    </div>            
                ) :
                <h2>Loading...</h2>
    )
}