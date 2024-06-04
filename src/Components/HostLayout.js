import { Link, Outlet, NavLink } from "react-router-dom"

export default function Host(){

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    return (
        <div>
            This is the Host page.
            <ul>
                <li><NavLink to= "" end style={({isActive}) => isActive ? activeStyle : null }>Dashboard</NavLink></li>
                <li><NavLink to = "income" style={({isActive}) => isActive ? activeStyle : null }>Income</NavLink></li>
                <li><NavLink to = "reviews" style={({isActive}) => isActive ? activeStyle : null }>Reviews</NavLink></li>
                <li><NavLink to = "vans" style = {({isActive}) => isActive ? activeStyle : null }>Vans</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}