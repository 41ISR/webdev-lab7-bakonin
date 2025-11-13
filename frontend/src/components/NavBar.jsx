import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        // .navbar>.navbar-container>h2.navbar-brand+ul.navbar-nav>li
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-brand">Feedback</h2>
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/"}> Домой</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar