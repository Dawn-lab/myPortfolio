import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./layout.scss";
import "./../Home/home.scss"


const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo"><img alt="logo" src=""></img></Link>
                <ul>
                    <li >
                        <Link to="/" className=" btn navlinks">Home</Link>
                    </li>
                    <li >
                        <Link to="/contacts" className=" btn navlinks">Contact</Link>
                    </li>
                    <li>
                        <Link to="/projects" className=" btn navlinks">Projects</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
