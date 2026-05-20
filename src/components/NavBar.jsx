import { NavLink } from "react-router-dom"


export default function NavBar() {

    return (
        <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
            <NavLink to="/" > Home </NavLink>

            <NavLink to="/chi-siamo"> Chi Siamo</NavLink>

            <NavLink to="/prodotti"> Prodotti </NavLink>
        </nav>
    );
}