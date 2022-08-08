import React, { useEffect } from 'react';
import logo from '../../public/graphics/logo.png';
import '../styles/navbar.scss';

const Navbar = () => {
    useEffect(() => {
        const url = window.location.pathname.slice(1);
        console.log("url:", url);
        const elem = url.length > 1
            ? document.querySelector(`a[href="${url}"]`)
            : document.querySelector('#navbarNavDropdown a[href="/"]');
        console.log("elem:", elem);
        highlightPage(elem);
    })
    const resetHighlights = () => {
        const elems = document.querySelectorAll(".nav-link");
        for (let i = 0; i < elems.length; i++) {
            elems[i].id === "navbarDropdownMenuLink"
                ? elems[i].className = "nav-link dropdown-toggle"
                : elems[i].className = "nav-link";
            elems[i].removeAttribute("aria-current");
        }
    };
    const highlightPage = (caller) => {
        resetHighlights();
        console.log("caller b4:", caller);
        caller.classList.add("active");
        caller.setAttribute("aria-current", "page");
        console.log("caller after:", caller);
    };


    return (
        <div className="navbar-wrapper">
            <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Chris Johannesson logo" width="200px" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                    href="about" > About</a>
                            </li>
                            <li className="nav-item dropdown hover-item">
                                <a
                                    className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
                                    href="blog"
                                >Blog</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">Webbutvecklingsbloggen</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">The Web Development Blog</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;