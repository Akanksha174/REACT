import React from 'react';
const App =()=>{
    return(
        <nav className="navbar">
            <div className="logo.png" alt="logo">
                <span>CheatenAI</span>
            </div>
            <ul className="nav-links">
                <li>Welcome</li>
                <li>Pages</li>
                <li>Dashboard</li>
                <li>Pricing</li>
                <li>SignIn</li>
                <li><button className="btn">Get Started for free</button></li>
                <li><button className="btn1">icon</button></li>
            </ul>
        </nav>
    );
}