import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetailsContext = React.createContext();

export default function HostVanDetailsLayout(){

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    const [hostVan, setHostVan] = useState(null);
    const parameters = useParams();
    console.log(parameters)

    useEffect(() => {
        fetch(`/api/host/vans/${parameters.id}`)
            .then(result => result.json())
            .then(data => {
                console.log('returned information: ')
                console.log(data.vans)
                setHostVan(data.vans)
            })
    }, [])


    if(hostVan == null || hostVan == {}){
        return <h2>Loading...</h2>
    }

    return   hostVan == null || hostVan == {} ?
        <h2>Loading...</h2>
        :              
        <div>
            <div>
                <img src = {hostVan.imageUrl} className="van-image-small"></img>
                <h2>{hostVan.name}</h2>
                <p><b>CAD $</b>{hostVan.price}</p>
            </div>
            <nav>
                <NavLink style = {({isActive}) => isActive ? activeStyle : null } to = "" end>Details</NavLink>
                <NavLink style = {({isActive}) => isActive ? activeStyle : null } to = "pricing">Pricing</NavLink>
                <NavLink style = {({isActive}) => isActive ? activeStyle : null } to = "photos">Photos</NavLink>
            </nav>
            <HostVanDetailsContext.Provider value = {{hostVan}}>
                <Outlet />
            </HostVanDetailsContext.Provider>
        </div>        
}

export { HostVanDetailsContext }