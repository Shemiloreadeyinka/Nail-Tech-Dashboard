import styles from "./catalogue.module.css";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

function Discount() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [discountFilter, setdiscountFilter] = useState(false);
  const [discount, setDiscount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editDiscountData, setEditDiscountData] = useState(null);
  const [viewDiscountPopup, setviewDiscountPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const discountDropdown = () => {
    setdiscountFilter(!discountFilter);
  };
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  };
  useEffect(() => {
    // to
    fetch("https://nailsavvy.vercel.app/coupons", { headers })
      .then((response) => response.json())
      .then((data) => setDiscount(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, []);

  const deleteDiscount = (discountid) => {
    console.log(discountid);
    fetch(`https://nailsavvy.vercel.app/coupons/${discountid}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete service");
        }
        console.log("Service deleted successfully");
      })
      .then(() => {
        setDiscount((prev) => prev.filter((d) => d.id !== discountid)); // Remove from state
        setDeletePopup(false);
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
      })
      .finally(() => {
        setDeletePopup(false);
      });
  };

  const viewDiscount = (discountId) => {
    fetch(`https://nailsavvy.vercel.app/coupons/${discountId}`, { headers })
      .then((response) => response.json())
      .then((data) => setEditDiscountData(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => setviewDiscountPopup(true));
    console.log("Editing discount ID:", discountId);
  };

  return (
    <>
      <div className={`${styles.catalogue}  ${styles.flex} ${styles.column}`}>
        <h1>Catalogue</h1>
        <div
          className={`${styles.flex} ${styles.spaceBet} ${styles.alignCen} ${styles.container}`}
        >
          <ul className={styles.catalogueMenu}>
            <NavLink to="/catalogue" end>
              <li>Services</li>
            </NavLink>
            <NavLink to="/catalogue/products">
              <li>Products</li>
            </NavLink>
            <NavLink to="/catalogue/voucher">
              <li>Voucher</li>
            </NavLink>
            <NavLink to="/catalogue/discount">
              <li>Discount</li>
            </NavLink>
          </ul>
        </div>
        <Link className={styles.test} to="./adddiscount">
          Add Discount
        </Link>
        <div className={styles.discountContainer}>
          <div className={styles.discountHeader}>
            <div className={styles.discountHeaderTitle}>
              <h1>Discounts</h1>
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
                10
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
              <input type="search" placeholder="Search discount...." id="" />
            </div>

            <div className={styles.filter} onClick={discountDropdown}>
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
            {discountFilter && (
              <motion.div
                className={styles.filterContent_overlay}
                onClick={() => setdiscountFilter(false)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: discountFilter ? 1 : 0, y: discountFilter ? 0 : -10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={styles.filterContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={`${styles.discount} `}>
                    <p
                      className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                    >
                      Discount Type
                    </p>
                    <form className={styles.quantityOptions}>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Percentage
                        <input type="radio" name="packages" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                      >
                        Fixed Amount
                        <input type="radio" name="packages" id="" />
                      </label>
                    </form>
                  </div>
                  <div className={`${styles.usage} `}>
                    <p
                      className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                    >
                      Usage
                    </p>
                    <form className={styles.usageOptions}>
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
                    <p
                      className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                    >
                      Date Published
                    </p>
                    <form className={styles.dateOptions}>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Last 7 days{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        This Month{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Last Month{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        This Quater{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Select date range{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                    </form>
                  </div>
                  <div className={`${styles.expiry} `}>
                    <p
                      className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                    >
                      Expiry Date
                    </p>
                    <form className={styles.expiryOptions}>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Within 7 days{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Within 30 days{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Within 3 Months{" "}
                        <input type="radio" name="technician" id="" />
                      </label>
                      <label
                        className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                      >
                        Above 3 Months{" "}
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
                </div>
              </motion.div>
            )}
          </div>
          <div className={styles.discountTableContainer}>
          {loading ? <p>Loading discounts...</p> : (
            <table className={styles.discountTable}>
              <thead className={styles.discountTH}>
                <tr>
                  <th>Discount id</th>
                  <th>Discount Code</th>
                  <th>Discount Value</th>
                  <th>Expiry Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              
                {discount &&
                  discount.map((discount, index) => (
                    <tr key={discount.id}>
                      <td>{discount.id}</td>
                      <td>{discount.code}</td>
                      <td>{discount.discount}</td>
                      <td>{discount.expiryDate}</td>
                      <td>
                        <div onClick={() => handleClick(index)}>
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
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.99935 2.99992C2.45959 2.99992 2.83268 2.62682 2.83268 2.16659C2.83268 1.70635 2.45959 1.33325 1.99935 1.33325C1.53911 1.33325 1.16602 1.70635 1.16602 2.16659C1.16602 2.62682 1.53911 2.99992 1.99935 2.99992Z"
                              stroke="#252B37"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.99935 14.6666C2.45959 14.6666 2.83268 14.2935 2.83268 13.8333C2.83268 13.373 2.45959 12.9999 1.99935 12.9999C1.53911 12.9999 1.16602 13.373 1.16602 13.8333C1.16602 14.2935 1.53911 14.6666 1.99935 14.6666Z"
                              stroke="#252B37"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Dropdown menu that only appears for the active row */}
                        {activeDropdown === index && (
                          <div className={styles.discountActions}>
                            <p>Publish</p>
                            <p
                              onClick={() => (
                                viewDiscount(discount.id),
                                setActiveDropdown(null)
                              )}
                            >
                              Edit
                            </p>
                            <p
                              onClick={() => (
                                setDeletePopup(true),
                                setActiveDropdown(null),
                                setDeleteId(discount.id)
                              )}
                            >
                              Delete
                            </p>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                {editDiscountData && (
                  <motion.div
                    className={styles.editDiscountoverlay}
                    onClick={() => setEditDiscountData(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className={styles.Details}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={styles.closeButton}
                        onClick={() => setEditDiscountData(null)}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 1L1 21M1 1L21 21"
                            stroke="#FF6C78"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h1>Review Details</h1>
                      <div className={styles.DetailsContainer}>
                        <div>
                          <h3>Discount Name</h3>
                          <h3>Discount Code</h3>
                        </div>
                        <div>
                          <p>Christmas Discount</p>
                          <p>{editDiscountData.code}</p>
                        </div>
                      </div>
                      <div className={styles.DetailsContainer}>
                        <h3>Discount Description</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. 
                        </p>
                      </div>
                      <div className={styles.DetailsContainer}>
                        <div>
                          <h3>Discount Type</h3>
                          <h3>Discount Value</h3>
                          {console.log(editDiscountData)}
                        </div>
                        <div>
                          <p>Percentage Discount</p>
                          <p>{editDiscountData.discount}</p>
                        </div>
                      </div>
                      <div className={styles.DetailsContainer}>
                        <h3>Expiry Date</h3>
                        <p>{editDiscountData.expiryDate}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </tbody>
              {deletePopup && (
                <motion.div
                  className={styles.editDiscountoverlay}
                  onClick={() => setDeletePopup(false)} initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}

                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.deletepopup}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={styles.closeButton}
                      onClick={() => setDeletePopup(false)}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30 10L10 30M10 10L30 30"
                          stroke="#FF6C78"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.deletepopupBody}>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="48"
                          height="48"
                          rx="24"
                          fill="#FEF0C7"
                        />
                        <rect
                          x="4"
                          y="4"
                          width="48"
                          height="48"
                          rx="24"
                          stroke="#FFFAEB"
                          stroke-width="8"
                        />
                        <path
                          d="M27.9988 24V28M27.9988 32H28.0088M26.2888 18.86L17.8188 33C17.6442 33.3024 17.5518 33.6453 17.5508 33.9945C17.5498 34.3437 17.6403 34.6871 17.8132 34.9905C17.9862 35.2939 18.2355 35.5467 18.5365 35.7238C18.8375 35.9009 19.1796 35.9961 19.5288 36H36.4688C36.818 35.9961 37.1601 35.9009 37.4611 35.7238C37.7621 35.5467 38.0114 35.2939 38.1844 34.9905C38.3573 34.6871 38.4478 34.3437 38.4468 33.9945C38.4458 33.6453 38.3534 33.3024 38.1788 33L29.7088 18.86C29.5305 18.5661 29.2795 18.3231 28.98 18.1544C28.6805 17.9858 28.3425 17.8972 27.9988 17.8972C27.6551 17.8972 27.3171 17.9858 27.0176 18.1544C26.7181 18.3231 26.4671 18.5661 26.2888 18.86Z"
                          stroke="#DC6803"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <h2>Delete Discount?</h2>
                      <p>Are you sure you want to delete this discount?</p>
                      <div className={styles.actions}>
                        <div
                          className={styles.deleteButton}
                          onClick={() => setDeletePopup(false)}
                        >
                          cancel
                        </div>
                        <button
                          className={styles.deleteButton}
                          onClick={() => deleteDiscount(deleteId)}
                        >
                          Yes, delete
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </table>
)}


          </div>
        </div>
      </div>
    </>
  );
}

export default Discount;
