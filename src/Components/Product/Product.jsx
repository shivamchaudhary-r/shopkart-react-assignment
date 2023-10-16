import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';
import Arrow_1 from '../../Assets/Arrow_1.svg';
import Arrow_2 from '../../Assets/Arrow_2.svg';
import linkIcon from '../../Assets/link_icon.svg';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsResp, categoriesResp] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories')
        ]);

        setProducts(productsResp.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = filter
    ? products.filter((item) => item.category === filter)
    : products;

  return (
    <div id="product" className="overflow-hidden w-full">
      <div className="product_container flex flex-col mt-6 overflow-hidden p-4 md:p-14">
        <div className="product_container_top flex justify-between items-center">
          <div className="container_top_heading">
            <h1>New products</h1>
          </div>
          <div className="container_top_arrows hidden md:flex justify-end items-center gap-20">
            <img src={Arrow_2} alt="" />
            <img src={Arrow_1} alt="" />
          </div>
        </div>
        <div className="product_container_bottom flex flex-col md:flex-row">
          <div className="container_bottom_left md:w-[30%]">
            <div className="bottom_left_content flex flex-row md:flex-col justify-start items-center md:items-start gap-4 md:gap-1 pl-2">
              <p>Apparel</p>
              <p className="font_bold">Accessories</p>
              <p>Best Sellers</p>
              <p>50% off</p>
            </div>
          </div>
          <div className="container_bottom_right mt-10 mb-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="container_bottom_right_card">
                <div className="card_image">
                  <div className="prod_img">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="card_arrow_img">
                    <img src={linkIcon} alt="" />
                  </div>
                </div>
                <div className="card_content">
                  <h2 className="text-2xl">{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                  <p>{product.description.substring(0, 100)}...</p>
                  <h2>${product.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container_top_arrows flex md:hidden justify-center gap-16 mb-10 md:mb-0">
          <img src={Arrow_2} alt="" />
          <img src={Arrow_1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
















// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [filter, setFilter] = useState('');
//     const [filteredProducts, setFilteredProducts] = useState([]);
  
//     // Fetch the data from the API
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const productsResponse = await axios.get('https://fakestoreapi.com/products');
//           setProducts(productsResponse.data);
  
//           const categoryResponse = await axios.get('https://fakestoreapi.com/products/categories');
//           setCategory(categoryResponse.data);
//         } catch (error) {
//           console.log(error);
//         }
//         setFilter('');
//       };
  
//       fetchData();
//     }, []);
  
//     // Handle category selection
//     const handleCategoryClick = (selectedCategory) => {
//       setFilter(selectedCategory);
//     };
  
//     // Filter products by category
//     useEffect(() => {
//       if (filter === '') {
//         setFilteredProducts([]);
//       } else {
//         const filtered = products.filter((item) => item.category === filter);
//         setFilteredProducts(filtered);
//       }
//     }, [filter]);
  
//     // Scroll the product container horizontally
//     useEffect(() => {
//       const container = document.querySelector('.container_bottom_right');
  
//       const handleWheelScroll = (e) => {
//         if (e.deltaY !== 0) {
//           e.preventDefault();
//           container.scrollLeft += e.deltaY;
//         }
//       };
  
//       container.addEventListener('wheel', handleWheelScroll);
  
//       return () => {
//         container.removeEventListener('wheel', handleWheelScroll);
//       };
//     }, []);
  
//     return (
//       <div id="product" className="overflow-hidden w-full">
//         <div className="product_container flex flex-col mt-6 overflow-hidden p-4 md:p-14">
//           <div className="product_container_top flex justify-between items-center">
//             <div className="container_top_heading">
//               <h1>New products</h1>
//             </div>
  
//             <div className="container_top_arrows hidden md:flex justify-end items-center gap-20">
//               <img src={Arrow_2} alt="" />
//               <img src={Arrow_1} alt="" />
//             </div>
//           </div>
  
//           <div className="product_container_bottom flex flex-col md:flex-row">
//             <div className="container_bottom_left md:w-[30%]">
//               <div
//                 className="bottom_left_content flex flex-row md:flex-col justify-start items-center md:items-start gap-4 md:gap-1 pl-2"
//                 onClick={handleCategoryClick}
//               >
//                 <p>All</p>
//                 {category.map((item, index) => (
//                   <p
//                     key={index}
//                     className={item === filter ? 'font_bold' : null}
//                     data-category={item}
//                   >
//                     {item}
//                   </p>
//                 ))}
//               </div>
//             </div>
  
//             <div className="container_bottom_right mt-10 mb-10">
//               {filteredProducts.length > 0
//                 ? filteredProducts.map((product) => (
//                     <div key={product.id} className="container_bottom_right_card">
//                       <div className="card_image">
//                         <div className="prod_img">
//                           <img src={product.image} alt="" />
//                         </div>
//                         <div className="card_arrow_img">
//                           <img src={linkIcon} alt="" />
//                         </div>
//                       </div>
//                       <div className="card_content">
//                         <h2 className="text-2xl">
//                           {product.title.split(' ').slice(0, 2).join(' ')}
//                         </h2>
//                         <p>{product.description.substring(0, 100)}...</p>
//                         <h2>${product.price}</h2>
//                       </div>
//                     </div>
//                   ))
//                 : products.map((product) => (
//                     <div key={product.id} className="container_bottom_right_card">
//                       <div className="card_image">
//                         <div className="prod_img">
//                           <img src={product.image} alt="" />
//                         </div>
//                         <div className="card_arrow_img">
//                           <img src={linkIcon} alt="" />
//                         </div>
//                       </div>
//                       <div className="card_content">
//                         <h2 className="text-2xl">
//                           {product.title.split(' ').slice(0, 2).join(' ')}
//                         </h2>
//                         <p>{product.description.substring(0, 100)}...</p>
//                         <h2>${product.price}</h2>
//                       </div>
//                     </div>
//                   ))}
//             </div>
//           </div>
  
//           <div className="container_top_arrows flex md:hidden justify-center gap-16 mb-10 md:mb-0">
//             <img src={Arrow_2} alt="" />
//             <img src={Arrow_1} alt="" />
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Product;



