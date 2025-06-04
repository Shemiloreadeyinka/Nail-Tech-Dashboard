import React from "react";
import { useState } from "react";
import styles from "./contentmanagment.module.css";

function ContentManagment() {
  const [contentFilter, setcontentFilter] = useState(false);
  const contentDropdown = () => {
    setcontentFilter(!contentFilter);
  };
  return (
    <section className={styles.contentManagment}>
      <h1>Content Management</h1>
      <div className={styles.contentManagmentContent}>
        <div className={styles.contentHeader}>
          <div className={styles.contentHeaderTitle}>
            <h1>Contents</h1>
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
            <input type="search" placeholder="Search content...." id="" />
          </div>
          <div>
            <div className={styles.filter} onClick={contentDropdown}>
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
            <div className={styles.addcontent}>Add content</div>
          </div>

          {contentFilter && (
            <div
              className={styles.filterContent_overlay}
              onClick={() => contentDropdown(false)}
            >
              <div
                className={styles.filterContent}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`${styles.stock} `}>
                  <p
                    className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                  >
                    Job Title
                  </p>
                  <form className={styles.stockOptions}>
                    <label
                      className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                    >
                      Technician <input type="radio" name="status" id="" />
                    </label>
                    <label
                      className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                    >
                      Customer Rep <input type="radio" name="status" id="" />
                    </label>
                    <label
                      className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                    >
                      Supervisor <input type="radio" name="status" id="" />
                    </label>
                  </form>
                </div>
                <div className={`${styles.date} `}>
                  <p
                    className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                  >
                    Employment Status
                  </p>
                  <form className={styles.dateOptions}>
                    <label
                      className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                    >
                      Active <input type="radio" name="technician" id="" />
                    </label>
                    <label
                      className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                    >
                      {" "}
                      Inactive
                      <input type="radio" name="technician" id="" />
                    </label>
                  </form>
                </div>
                <div className={`${styles.quantity} `}>
                  <p
                    className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                  >
                    Appointments
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
            </div>
          )}
        </div>

        <table className={styles.contentTable}>
          <thead>
            <tr>
              <th className={styles.contentTableHeader}></th>
              <th className={styles.contentTableHeader}></th>
              <th className={styles.contentTableHeader}>Title</th>
              <th className={styles.contentTableHeader}>Category</th>
              <th className={styles.contentTableHeader}>Date Created</th>
              <th className={styles.contentTableHeader}>Status</th>
              <th className={styles.contentTableHeader}>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={styles.contentTableData}>
                <input type="checkbox" name="" id="" />
              </td>
              <td className={styles.contentTableData}>
                <img src="src\assets\picture.jpg" alt="" srcset="" />
              </td>
              <td className={styles.contentTableData}>
                Lorem Ipsum is simply dummy text
              </td>
              <td className={`${styles.contentTableData} ${styles.category}`}>
                <p>User Dashboard</p>
                <p>Banner Section</p>
              </td>
              <td className={styles.contentTableData}>October 13, 2024</td>
              <td className={styles.contentTableData}>                <div>
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#16A34A" />
                  </svg>
                  <p>Published</p>
                </div></td>
              <td className={styles.contentTableData}>
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
              <td className={styles.contentTableData}>
                <input type="checkbox" name="" id="" />
              </td>
              <td className={styles.contentTableData}>
                <img src="src\assets\picture2.jpg" alt="" srcset="" />
              </td>
              <td className={styles.contentTableData}>
                Lorem Ipsum is simply dummy text
              </td>
              <td className={`${styles.contentTableData} ${styles.category}`}>
                <p>Website</p>
                <p>Homepage</p>
              </td>
              <td className={styles.contentTableData}>October 13, 2024</td>
              <td className={styles.contentTableData}>                <div>
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#16A34A" />
                  </svg>
                  <p>Published</p>
                </div></td>
              <td className={styles.contentTableData}>
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
              <td className={styles.contentTableData}>
                <input type="checkbox" name="" id="" />
              </td>
              <td className={styles.contentTableData}>
                <img src="src\assets\picture3.jpg" alt="" srcset="" />
              </td>
              <td className={styles.contentTableData}>
                Lorem Ipsum is simply dummy text
              </td>
              <td className={`${styles.contentTableData} ${styles.category}`}>
                <p>Website</p>
                <p>Banner Section</p>
              </td>
              <td className={styles.contentTableData}>October 13, 2024</td>
              <td className={styles.contentTableData}>
                <div>
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#16A34A" />
                  </svg>
                  <p>Published</p>
                </div>
              </td>
              <td className={styles.contentTableData}>
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
    </section>
  );
}

export default ContentManagment;
