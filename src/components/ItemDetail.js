import React from "react";
import { useEffect, useState } from "react";
import Api from "./Api";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";




function ItemDetail(props) {

const [item, setItem] = useState({});

    useEffect (() => {
       async function getCharacter() {
           setItem(await Api.getCharacter(1));
           console.log(item);
         }
         
            
        getCharacter();
    }, [])

return (

<div className="container text-center border col-lg-7 ">
<div className="text-center grid col-lg-8">
    <h1>{item.name}</h1>
<div className="col-lg-3 col-sm-2">
    <img src={item.image} alt={item.name}/> 
</div>
<div className="text-center col-lg-3 col-sm-2">
 <div className="">
    <p>{item.status}</p>
    <p>{item.species}</p>
    <p>{item.type}</p>
    <p>{item.gender}</p>
    </div>
    <button className="btn btn-success">Selec</button>
</div>
    <div>
        <p className="h1">descripcion</p>
        <p>{item.url}</p>
    </div>
</div>
<div className="container">
    <ItemCount/>
</div>

   
</div>




)
}
export default ItemDetail;
