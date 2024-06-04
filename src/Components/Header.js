import { NavLink } from "react-router-dom"

export default function Header(){

    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    };

    return (
        <main>
            <nav>
            <NavLink to = "/host">Host</NavLink>
            <NavLink to="/"  style = {({isActive}) => isActive ? style : null} >Home</NavLink>
            <NavLink to="/about" style = {({isActive}) => isActive ? style : null}>About</NavLink>
            <NavLink to="/vans" style = {({isActive}) => isActive ? style : null}>Vans</NavLink>
            </nav>
      </main>
    )
}