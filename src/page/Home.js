import ItemListContainer from '../components/ItemListContainer';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ItemDetail from '../components/ItemDetail';
import Footer from '../components/Footer';




const Home = () => {
    return ( 
          <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/species/:idSpecies" element={<ItemListContainer/>} />
      <Route path='/1' element={<ItemDetail/>} />
      </Routes>
      <Footer/>
          </BrowserRouter>
    );
}

export default Home;