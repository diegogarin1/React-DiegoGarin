import { useState, useEffect } from "react";

import CardUser from "../components/card/Card";

import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const [prod, setProd] = useState({});

  let { id } = useParams();

  console.log(prod);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((json) =>
      setProd(json.data)
    );
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {prod.id ? <CardUser prod={prod} /> : null}
    </div>
  );
};

export default DetailPage;