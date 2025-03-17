// pages/Home/Home.js
import { useState, useEffect } from 'react';
import CardProduct from '../../components/Midterm_Components/CardProduct';
import styles from './HomeProductStyle.module.css';

function HomeProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setMaxPrice] = useState('');
  const [rates, setMinRate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!price || product.price <= price) && (!rates || product.rating.rate >= rates)
    && product.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <input
          type="number"
          placeholder="Max price"
          value={price}
          onChange={(e) => setMaxPrice(e.target.value)}
          className={styles.priceInput}
        />
        <input
          type="number"
          placeholder="Rate"
          value={rates}
          onChange={(e) => setMinRate(e.target.value)}
          className={styles.priceInput}
          min="0"
          max="5"
        />
          <select
            className="p-2 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">-- All --</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* {selectedCategory && (
            <p className="text-blue-600 font-medium">
              Selected: {selectedCategory}
            </p>
          )} */}
        </div>
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomeProduct;