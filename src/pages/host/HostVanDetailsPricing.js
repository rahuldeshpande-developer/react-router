import { HostVanDetailsContext } from "../../Components/HostVanDetailsLayout"
import React from "react"

export default function HostVanDetailsPricing(){

    const { hostVan } = React.useContext(HostVanDetailsContext)

    return (
        <div>
            <h2>Pricing information.</h2>
            <p>Cost: CAD $ {hostVan.price}/day</p>
        </div>
   )
}