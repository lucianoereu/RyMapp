import React from "react";

const ItemList = ({ characters }) => {
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-4  col-sm-10 mb-2">
            <div className="card container " style={{ minWidth: "200px" }}>
              <img className="card-img-top mt-3" src={item.image} alt="character" />
              <div className="card-body container">
                <h5 className="card-title text-primary h2">{item.name}</h5>
                <hr />
                <p className="card-text text-secundary">Species: {item.species}</p>
                <p className="card-text">Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;