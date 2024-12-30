import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../layer/Product';
import axios from 'axios';

function Items({ currentItems }) {
  return (
    <div className="flex flex-wrap gap-8">
      {currentItems && currentItems.length > 0 ? (
        currentItems.map((item) => (
          <div key={item.id} className="w-[310px]">
            <Product
            item={item}
              src={item.image} // Assuming images is an array, using the first image
              alt={item.title}
              Title={item.title}
              dollar={`$${item.price}`}
            />
          </div>
        ))
      ) : (
        <p>No items available.</p>
      )}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  const [allItems, setAllItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products'
        );
        setAllItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const endOffset = Math.min(itemOffset + itemsPerPage, allItems.length); // Prevent endOffset overflow
  const currentItems = allItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allItems.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Items currentItems={currentItems} />
      <div className="py-8 flex flex-col items-center gap-4">
        {allItems.length > 0 && (
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            previousLabel={null}
            nextLabel={null}
            containerClassName="pagination flex gap-2"
            activeClassName="active bg-black text-white"
            pageLinkClassName="py- px-2 border-2 hover:bg-black hover:text-white transition-all"

          />
        )}
        <h3 className="text-gray-700">
          Products {itemOffset + 1} to {endOffset} of {allItems.length}
        </h3>
      </div>
    </div>
  );
}

export default Pagination;
