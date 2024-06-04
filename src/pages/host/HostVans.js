import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function HostVans(){

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans`)
            .then(r => r.json())
            .then(r => setVans(r.vans))
    }, [])

    return(
        vans.length > 0 ? 
        (<div>
            <h2>These are the host vans.</h2>
            <div>
                {vans.map((van, index) => {
                    return (
                        <div key = {index}>
                            <NavLink to = {`${van.id}`}>
                                <p>{van.name}</p>
                                <p>{van.description}</p>
                            </NavLink>
                        </div>
                    )
                })}                
            </div>
        </div>) : <h2>Loading your vans....</h2>
    )
}