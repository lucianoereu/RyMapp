import ItemListContainer from '../components/ItemListContainer';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from '../components/ItemDetailContainer';



const Home = () => {
    return ( 
          <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/species/:idSpecies" element={<ItemListContainer/>} />
      <Route path='/characters/:iditems' element={<ItemDetailContainer/>} />
      </Routes>
      <Footer/>
          </BrowserRouter>
    );
}

export default Home;