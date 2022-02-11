import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './CartWidget';
const NavBar = () => {
    return ( 
      <>
      <nav className="navbar navbar-light bg-light bg-gradient ">
      <div className="container-fluid position-relative">
        <a className="navbar-brand font-monospace" href="/">
          Rick and Morty
        </a>
        <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/"><button type="button" className="btn btn-outline-secondary">Pizzas</button></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/"><button type="button" className="btn btn-outline-success">Sucursales</button></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/"><button type="button" className="btn btn-outline-light"><Cart/></button></a>
  </li>
</ul>
      </div>
    </nav>
    
    </>
    );

}
export default NavBar;