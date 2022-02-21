import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './CartWidget';
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
      <>
      <nav className="navbar navbar-light bg-light bg-gradient ">
      <div className="container-fluid position-relative">
      <Link to="/" className="navbar-brand">
          Rick and Morty
      </Link>
        <ul className="nav justify-content-end">
  <li className="nav-item">
    <Link to="/species/Human" className="nav-link">
    <button type="button" className="btn btn-outline-secondary">Humanos</button></Link>
  </li>
  <li className="nav-item">
    <Link to="/species/Alien" className="nav-link">
    <button type="button" className="btn btn-outline-success">Aliens</button></Link>
  </li>
  <li className="nav-item">
    <Link to="src/page/ItenDetailContainer.js" className="nav-link">
    <button type="button" className="btn btn-outline-light"><Cart/></button></Link>
  </li>
</ul>
      </div>
    </nav>
    
    </>
    );

}
export default NavBar;