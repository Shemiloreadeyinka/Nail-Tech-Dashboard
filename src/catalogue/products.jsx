import React from "react";
import styles from "./catalogue.module.css";
import { useState, useEffect } from "react";
import { NavLink,Link } from 'react-router-dom';
import { motion } from "framer-motion";


function Products() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `,
  };
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productFilter, setproductFilter] = useState(false);
  const handleClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const productDropdown = () => {
    setproductFilter(!productFilter);
  };
     useEffect(() => {
            // total revenue
            fetch("https://nailsavvy.vercel.app/products", { headers })
              .then((response) => response.json())
              .then((data) => setProduct(data))
              .catch((error) => console.error("Error:", error))
              .finally(() => setLoading(false));
          }, []);

          const deleteService = (productId) => {
            fetch(`https://nailsavvy.vercel.app/services/${productId}`, {
              
              method: "DELETE",
              headers
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Failed to delete service");
                }
                console.log("Product deleted successfully");
        
              })
              .catch((error) => {
                console.error("Error deleting product:", error);
              })
              .finally(() => {
                setDeletePopup(false);
              });
          };
  return ( 
    <>
     <div className={`${styles.catalogue}  ${styles.flex} ${styles.column}`}>
      <h1>Catalogue</h1>
      <div className={`${styles.flex} ${styles.spaceBet} ${styles.alignCen} ${styles.container}`}>
        <ul className={styles.catalogueMenu}>
          <NavLink to="/catalogue" end><li>Services</li></NavLink>
          <NavLink to="/catalogue/products" ><li>Products</li></NavLink>
          <NavLink to="/catalogue/voucher" ><li>Voucher</li></NavLink>
          <NavLink to="/catalogue/discount" ><li>Discount</li></NavLink>
        </ul>
 </div>
 
    <Link to='addproduct' className={styles.test}> Add Product </Link>
    <div className={styles.productContainer}>
      <div className={styles.productHeader}>
        <div className={styles.productHeaderTitle}>
          <h1>Products</h1>
          <div>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#FF9DA5" />
            </svg>
            50
          </div>
        </div>
        <div className={styles.search}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
              stroke="#A1A1AA"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="search" placeholder="Search product, brand...." id="" />
        </div>

        <div className={styles.filter} onClick={productDropdown}>
          <p>Filter</p>
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
              stroke="#A1A1AA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {productFilter && (
          <div
            className={styles.filterContent_overlay}
            onClick={() => productDropdown(false)}
          >
            <motion.div
              className={styles.filterContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: productFilter ? 1 : 0, y: productFilter ? 0 : -10 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`${styles.stock} `}>
                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                  Stock Quantity
                </p>
                <form className={styles.stockOptions}>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                  >
                    In stock <input type="radio" name="status" id="" />
                  </label>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                  >
                    Out of stock <input type="radio" name="status" id="" />
                  </label>
                </form>
              </div>
              <div className={`${styles.quantity} `}>
                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                  Quantity Sold
                </p>
                <form className={styles.quantityOptions}>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                  >
                    Highest to Lowest{" "}
                    <input type="radio" name="packages" id="" />
                  </label>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                  >
                    Lowest to Highest{" "}
                    <input type="radio" name="packages" id="" />
                  </label>
                </form>
              </div>
              <div className={`${styles.date} `}>
                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                  Date Added
                </p>
                <form className={styles.dateOptions}>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                  >
                    Last 7 days <input type="radio" name="technician" id="" />
                  </label>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                  >
                    This Month <input type="radio" name="technician" id="" />
                  </label>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                  >
                    Last Month <input type="radio" name="technician" id="" />
                  </label>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                  >
                    This Quater <input type="radio" name="technician" id="" />
                  </label>
                  <label
                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                  >
                    Select date range{" "}
                    <input type="radio" name="technician" id="" />
                  </label>
                </form>
              </div>

              <div
                className={`${styles.filterOption} ${styles.flex} ${styles.column}`}
              >
                <button className={` ${styles.px14} ${styles.w400}`}>
                  Apply Filter{" "}
                </button>
                <button className={` ${styles.px14} ${styles.w400}`}>
                  Clear Filter{" "}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div><div className={styles.productTableBody}>      {product && !loading &&  <table className={styles.serviceTable}>
        <thead className={styles.serviceTH}>
          <tr>
            <th>Product Name</th>
            <th>Product Brand</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock Qty.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {product.map((product,index)=>(  <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.brand}</td>
            <td>{product.sku}</td>
            <td>₦{Number(product.price).toLocaleString()}</td>
            <td>{product.stock}</td>
            <td>
              <div onClick={()=>handleClick(index)}>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.99935 8.83325C2.45959 8.83325 2.83268 8.46016 2.83268 7.99992C2.83268 7.53968 2.45959 7.16659 1.99935 7.16659C1.53911 7.16659 1.16602 7.53968 1.16602 7.99992C1.16602 8.46016 1.53911 8.83325 1.99935 8.83325Z"
                    stroke="#252B37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.99935 2.99992C2.45959 2.99992 2.83268 2.62682 2.83268 2.16659C2.83268 1.70635 2.45959 1.33325 1.99935 1.33325C1.53911 1.33325 1.16602 1.70635 1.16602 2.16659C1.16602 2.62682 1.53911 2.99992 1.99935 2.99992Z"
                    stroke="#252B37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.99935 14.6666C2.45959 14.6666 2.83268 14.2935 2.83268 13.8333C2.83268 13.373 2.45959 12.9999 1.99935 12.9999C1.53911 12.9999 1.16602 13.373 1.16602 13.8333C1.16602 14.2935 1.53911 14.6666 1.99935 14.6666Z"
                    stroke="#252B37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
                {activeDropdown === index && (
                                          <div className={styles.voucherActions}>
                                            <p onClick={()=>(PublishVoucher(voucher.code),setActiveDropdown(null))}>Edit</p>
                                            <p onClick={() =>( viewVoucher(voucher.id),setActiveDropdown(null))}>Delete</p>
                                            {/* <p  onClick={() => (
                                              setDeletePopup(true),
                                              setActiveDropdown(null),
                                              setSelectedId(voucher.id)
                                            )}>Delete</p> */}
                                          </div>
                                        )}
            </td>
          </tr>
        ))}
        </tbody>
      </table>}</div>

      
     
    </div></div></>
  );
}

export default Products;
