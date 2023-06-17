import React from "react";
import ItemListContainer from "../components/itemlistcontainer/ItemListContainer";

const Electronics = () => {
  return (
    <div>
      <h1>Electronic Products </h1>
      <ItemListContainer cat="electronics" />
    </div>
  );
};

export default Electronics;