import React from "react"
import { HostVanDetailsContext } from "../../Components/HostVanDetailsLayout"

export default function HostVanDetailsPhotos(){

    const { hostVan } = React.useContext(HostVanDetailsContext)

    return (
        <p>
            <img className = "van-image" src = {hostVan.imageUrl} alt = "image of van" />
        </p>
    )
}