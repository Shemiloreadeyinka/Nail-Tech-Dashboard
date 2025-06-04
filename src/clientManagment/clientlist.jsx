import React from 'react';
import { useState } from "react";
import styles from "./clientManagment.module.css";

const ClientList = () => {
      const [clientFilter, setclientFilter] = useState(false);
      const clientDropdown=()=>{setclientFilter(!clientFilter)}
  return (
    <div className={styles.clientManagmentContent}>
    <div className={styles.clientHeader}>
      <div className={styles.clientHeaderTitle}>
        <h1>Clients</h1>
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
        <input type="search" placeholder="Search client...." id="" />
      </div>
      <div>
        <div className={styles.filter} onClick={clientDropdown}>
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
        <div className={styles.addclient}>Export</div>
      </div>

      {clientFilter && (
                          <div
                            className={styles.filterContent_overlay}
                            onClick={() => clientDropdown(false)}
                          >
                            <div className={styles.filterContent} onClick={(e) => e.stopPropagation()}>
                              <div className={`${styles.stock} `}>
                                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                                  Job Title
                                </p>
                                <form className={styles.stockOptions}>
                                    <label className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}>Technician <input type="radio" name="status" id="" /></label>
                                    <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}>Customer Rep <input type="radio" name="status" id="" /></label>
                                    <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}>Supervisor <input type="radio" name="status" id="" /></label>
                                </form>
                              </div>
                              < div className={`${styles.date} `}>
                                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                                Employment Status
                                </p>
                                <form className={styles.dateOptions}>
                                    <label className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}>Active <input type="radio" name="technician" id="" /></label>
                                    <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}> Inactive<input type="radio" name="technician" id="" /></label>

                                </form>
                              </div>
                              < div className={`${styles.quantity} `}>
                                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                                Appointments
                                </p>
                                <form className={styles.quantityOptions}>
                                    <label className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}>Highest to Lowest  <input type="radio" name="packages" id="" /></label>
                                    <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}>Lowest to Highest   <input type="radio" name="packages" id="" /></label>
                                </form>
                              </div>
    
                              <div className={`${styles.filterOption } ${styles.flex} ${styles.column}`}>
                                  <button className={` ${styles.px14} ${styles.w400}`}>Apply Filter </button>
                                  <button className={` ${styles.px14} ${styles.w400}`}>Clear Filter </button>
                              </div>
                            </div>
                          </div>
                        )}
    </div>

      <table className={styles.clientTable}>
        <thead>
          <tr>
            <th className={styles.clientTableHeader}>Name</th>
            <th className={styles.clientTableHeader}>Email Address</th>
            <th className={styles.clientTableHeader}>Phone Number</th>
            <th className={styles.clientTableHeader}>Date Joined</th>
            <th className={styles.clientTableHeader}>Referralls</th>
            <th className={styles.clientTableHeader}>Reviews</th>
            <th className={styles.clientTableHeader}>Appointments</th>
            <th className={styles.clientTableHeader}></th>
          </tr>
        </thead>
        
          <tbody>
            <tr>
              <td className={styles.clientTableData}>Omotola Akande</td>
              <td className={styles.clientTableData}>
              omotolaakande@gmail.com
              </td>
              <td className={styles.clientTableData}>08034547878</td>
              <td className={styles.clientTableData}>03-07-2021</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>
              <div>
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
              </td>
            </tr>
            <tr>
              <td className={styles.clientTableData}>Omotola Akande</td>
              <td className={styles.clientTableData}>
              omotolaakande@gmail.com
              </td>
              <td className={styles.clientTableData}>08034547878</td>
              <td className={styles.clientTableData}>03-07-2021</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>
              <div>
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
              </td>
            </tr>
            <tr>
              <td className={styles.clientTableData}>Omotola Akande</td>
              <td className={styles.clientTableData}>
              omotolaakande@gmail.com
              </td>
              <td className={styles.clientTableData}>08034547878</td>
              <td className={styles.clientTableData}>03-07-2021</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>5</td>
              <td className={styles.clientTableData}>
              <div>
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
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};


export default ClientList;