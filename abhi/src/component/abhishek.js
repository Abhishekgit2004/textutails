import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

export default function Navbar(props) {
   
    return (
        <nav className={`navbar navbar-expand-lg bg-dark bg-gradient`}>
            <div className="container-fluid  mx-5">
                <a className="navbar-brand mx-5 text-info " href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active mx-5 text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link mx-5 text-white" href="/">Blog</a>
                        </li>                            
                        <li className="nav-item ">
                            <a className="nav-link mx-5 text-white" href="/">Bag</a>
                        </li>  
                        <li className="nav-item ">
                            <a className="nav-link mx-5 text-white" href="/">Contact</a>
                        </li>  
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                 
                </div>
            </div>
        </nav>

    )
}