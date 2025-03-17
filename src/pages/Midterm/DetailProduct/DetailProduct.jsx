import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DetailProductStyle.module.css";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {  
        setProduct(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.detailContainer}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className={styles.image} />
      <p>{product.description}</p>
      <p>Giá: ${product.price}</p>
    </div>
  );
};

export default DetailProduct;