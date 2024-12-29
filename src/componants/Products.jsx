import React, { useEffect, useState } from 'react';
import Container from '../layer/Container';
import Product from '../layer/Product';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import PreArow from '../icons/PreArow';
import NextArrow from '../icons/NextArrow';
import axios from 'axios';

const Products = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PreArow />,
    nextArrow: <NextArrow />,
  };

  // State for products
  const [products, setProducts] = useState([]);
  const limit = 10; // Specify product limit

  // Fetch data from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const limitedProducts = response.data.slice(0, limit); // Take first 'limit' products
        setProducts(limitedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, [limit]);

  return (
    <Container>
      <h2 className="font-bold text-mHC text-5xl font-dmSans py-6">New Arrivals</h2>

      {/* Slider wrapping the dynamically loaded Product components */}
      <Slider {...settings}>
        {products.map((item) => (
          <Product
          item={item}
            key={item.id}
            src={item.image} // Dynamic image from API
            alt={item.title} // Alternative text
            Title={item.title} // Product title
            dollar={`$${item.price}`} // Product price
          />
        ))}
      </Slider>
    </Container>
  );
};

export default Products;
