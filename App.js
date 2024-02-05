import React from "react";
import ReactDOM from "react-dom";


const Header = () => {  
return (
   
    <div className="header">
        <div className="logo-container">
            <img className="logo" src ="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>
   
    <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
    </ul>
    </div>
    </div>
   
)
}

const ReatrauntCard  = () =>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <h3>Sowmya foods</h3>
        </div>
    );
}

const Body =() =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container"><ReatrauntCard/></div>
        </div>
    )
}


const AppLayout = () =>{
return (
    <div className="app">
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);