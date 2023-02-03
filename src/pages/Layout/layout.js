import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./layout.scss";


const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo"><img alt="logo" src=""></img></Link>
                <ul>
                    <li >
                        <Link to="/" className="navlinks">Home</Link>
                    </li>
                    <li >
                        <Link to="/contacts" className="navlinks">Contact</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="navlinks">Projects</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
