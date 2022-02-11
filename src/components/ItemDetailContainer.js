
import { useEffect, useState  } from "react";
import ItemDetail from "./ItemDetail";




const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({});

    useEffect(() => {
    
        fetch(`https://rickandmortyapi.com/api/character/species/human`)
        .then(result => setItemDetail(result))
        .catch(error => console.log(error));
    }, []);

    return (<ItemDetail itemDetail={itemDetail} />);

}


export default ItemDetailContainer;