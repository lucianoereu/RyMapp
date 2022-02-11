import {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const ItemCount = ({ count, onIncrement, onDecrement }) => {


    const [Count , setCount] = useState(1);



     const Incrementar = () => {
         if(Count < 5){
        setCount(Count + 1);
        console.log("Incrementar");
    }else{
        console.log("No puedes incrementar mas de 5");
    }};


    const Decrementar = () => {
        if(Count > 1){
            setCount(Count - 1);
            console.log("Decrementar");
        }else {
            console.log("No se puede decrementar");
    }};


    return (
        <div className="container contenedor-contador text-center">
    <div className="container  bd-highlight mb-3 item-count">
        <button type="button" className=" btn btn-outline-danger" onClick={Decrementar}>-</button>
        <span className="num-contador text-muted">        {Count}       </span>
        <button type="button" className="btn btn-outline-success" onClick={Incrementar}>+</button>
    </div>
    </div> );
};


export default ItemCount;


