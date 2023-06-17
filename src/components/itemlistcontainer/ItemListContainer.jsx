import React, { useState, useEffect } from "react";
import CardUser from "../card/Card";


import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  const [prods, setProds] = useState([]);


  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProds(json));
  }, []);

  const filteredProds = [prods.filter (product => product.category === props.cat)]
  console.log(filteredProds)
  return (
    
    <div className="Cards-List">
      {prods.map((prod) => {
        return (
          <div key={prod.id}>
            <Link to={`detail/${prod.id}`}>
              <CardUser prod={prod} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer


