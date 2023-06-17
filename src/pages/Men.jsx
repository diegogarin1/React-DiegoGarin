import React from "react";
import ItemListContainer from "../components/itemlistcontainer/ItemListContainer";

const Men = () => {
  return (
    <div>
      <h1>Men's Products </h1>
      <ItemListContainer cat="men's clothing" />
    </div>
  );
};

export default Men;