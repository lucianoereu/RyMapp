import {useEffect, useState} from "react";

const ItemDetail = ({item}) => {
    const [itemDetail, setItemDetail] = useState(null);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${item}`)
        .then((response) => response.json())
        .then((item) => setItemDetail(item));
    }, [item]);
    return <div>{itemDetail && itemDetail.title}</div>;
}

export default ItemDetail;
