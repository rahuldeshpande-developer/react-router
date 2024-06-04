import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Vans(){

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(r => r.json())
            .then(r => setVans(r.vans))
    }, [])

    return (
        <div className='vans-container'>
            <h2>Explore our Vans Options!</h2>
            {vans.map((van, index) => {
                return(
                    <div key = {index} className ='van-content'>
                        <Link to={`${van.id}`}>
                        <img className = 'van-image' src = {van.imageUrl} />
                        
                        <p><b>{van.name}</b> ${van.price}/day</p>
                        <p>{van.description}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}