import ItemCount from '../components/ItemCount';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import Items from '../components/Items';


const Home = () => {
    return ( 
    <>
      <div className='container'>
        <div className='row'>
        
        <ItemListContainer/>
        <ItemCount/>
        <Items/>
        <ItemDetailContainer/>
        </div>
      </div>
    </>
    );
}

export default Home;