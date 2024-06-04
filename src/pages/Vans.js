import { useEffect, useState } from "react"

export default function Vans(){

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(r => r.json())
            .then(r => setVans(r.vans))
    }, [])

    return (
        <div class='vans-content'>
            <h2>Vans page.</h2>
            {vans.map((van, index) => {
                return(
                    <div key = {index}>
                        <p>{van.name}, ${van.price}/hour</p>
                        <p>{van.description}</p>
                        <img className = 'van-image' src = {van.imageUrl} />
                    </div>
                )
            })}
        </div>
    )
}