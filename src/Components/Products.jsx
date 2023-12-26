import React, { useEffect, useState } from 'react';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className=" flex-1 products bg-amber-200">
      <h1>Products</h1>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <p>{product.title}</p>
              <p>${product.price}</p>
              {/* Add more product details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
