import { HostVanDetailsContext } from "../../Components/HostVanDetailsLayout" 
import React from "react"

export default function HostVanDetails(){

    const { hostVan } = React.useContext(HostVanDetailsContext)

    return hostVan == null ? 
        <p>
            Loading host van data...
        </p> :
        (
            <div>
                <h2>{hostVan.name}</h2>
                <p>{hostVan.description}</p>
                <p>Cost: CAD ${hostVan.price}</p>
            </div>
        )
}