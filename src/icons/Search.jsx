import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
const Search = () => {

//   const [all, setAll] = useState([]); // State to store products
//   const [searchValue,setsearchValue] = useState("")
//   console.log(searchValue)
//   useEffect(() => {
//     async function fetchData(searchValue) {
//       try {
//         // Fetching products data from the API
//         let response = await axios.get(
//           `https://dummyjson.com/products/search?q=${searchValue}`
//           );
//         setAll(response.data.products); // Access the "products" array
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
      
//     }
// const handleSearch = async (e) => {
//   setsearchValue(e.target.value);
//   if(searchValue){
//     faceData(searchValue)
//   }
// }
//   },);












  return (
    <>
    <div className="relative w-[50%]">
            <input 
                type="text" 
                placeholder='Search Products' 
                className='bg-white p-4 w-full rounded'
                // value={searchValue}
                // onChange={(e) => handleSearch (e)}
                />
            <FaSearch 
                className="absolute right-5 top-1/2 -translate-y-1/2"/>
        </div>
    </>
  )
}

export default Search