import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [all, setAll] = useState([]); // State to store products

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetching products data from the API
        let response = await axios.get('https://dummyjson.com/products');
        setAll(response.data.products); // Access the "products" array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <select>
        {/* Mapping through the products array */}
        {all.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title} {/* Display product title */}
          </option>
        ))}
      </select>
    </>
  );
};

export default Api;
