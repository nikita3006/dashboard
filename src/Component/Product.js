import React  from 'react';
import '../Component/Product.css'; 
import {LuSearch} from 'react-icons/lu';
import {AiOutlineDown} from 'react-icons/ai'
import product1Image from '../Asset/product_1.png';
import product2Image from '../Asset/product 2.png';



function Product() {
  

  


    return (
      <div className="product-container">
        <section className='product-container-title'>
             <h4>Product Sell</h4>
             <span className='product-container-search'>
                 <span className='search-sign'><LuSearch/> 
                 <input type="text" placeholder="Search" /></span>
                <button class="dropbtn">Last 30 days 
                   <span className='down-sign'><AiOutlineDown/></span>
                    </button>
             </span>
        </section>

     
        <table className="product-table">
          <thead>
            <tr className="product-title">
              <th>Product</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-info">
                <img src={product1Image} alt="Product Image" className="product-image" />
                <div className="product-details">
                  <h3>Abstract 3D</h3>
                  <p className="product-title">auctor urna nunc id cursus metus aliquam eleifend</p>
                </div>
              </td>
              <td>32 in stock</td>
              <td>$ 45.99</td>
              <td>20</td>
            </tr>
            <tr>
              <td className="product-info">
                <img src={product2Image} alt="Product Image" className="product-image" />
                <div className="product-details">
                  <h3>Sarphens Illustration</h3>
                  <p className="product-title">sagittis purus sit amet volutpat consequat mauris nunc</p>
                </div>
              </td>
              <td>32 in stock</td>
              <td>$ 45.99</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>



      </div>
    );
  
}

export default Product;
