import { NavLink, Outlet } from "react-router-dom";

export default function Basic(){

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    return (
        <div className = 'basic-container'>
            <NavLink to="home" style = {({isActive}) => isActive ? activeStyle : null}>Home</NavLink>
            <NavLink to = "about" style = {({isActive}) => isActive ? activeStyle : null}>About</NavLink>
            <NavLink to = "contact" style = {({isActive}) => isActive ? activeStyle : null}>Contact</NavLink>
            <Outlet />
        </div>
    )
}