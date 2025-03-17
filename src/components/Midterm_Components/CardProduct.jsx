// components/Card/Card.js
import { Link } from 'react-router-dom';
import styles from './CardProductStyle.module.css';

function CardProduct({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`product/detail/${product.id}`}>View Details</Link>
    </div>
  );
}

export default CardProduct;