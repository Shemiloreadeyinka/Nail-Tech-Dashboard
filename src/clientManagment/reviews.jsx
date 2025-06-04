import React from 'react';
import styles from './clientManagment.module.css'
import { useState } from 'react';
function Reviews() {
          const [reviewFilter, setreviewFilter] = useState(false);
          const reviewDropdown=()=>{setreviewFilter(!reviewFilter)}
  return (
    <section className={styles.reviews}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewHeaderTitle}>
                  <h1>Reviews</h1>
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
                <div>
                <div className={styles.reviewCount}>Showing 10 of 50</div>
                  <div className={styles.filter} onClick={reviewDropdown}>
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

                </div>
          
                {reviewFilter && (
                                    <div
                                      className={styles.filterContent_overlay}
                                      onClick={() => reviewDropdown(false)}
                                    >
                                      <div className={styles.filterContent} onClick={(e) => e.stopPropagation()}>
                                        <div className={`${styles.stock} `}>
                                          <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                                            Star Rating
                                          </p>
                                          <form className={styles.stockOptions}>
                                              <label className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                                                <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                                                <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                                                <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                                                <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F2830D"/>
                                                </svg>
                                                <input type="checkbox" name="status" id="" /></label>
                                                                                            <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                                                <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                                                <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                                                <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                                                <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                                                </svg>
                                                <input type="checkbox" name="status" id="" /></label>
                                                                                            <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                                                <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                                                <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                                                <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F1F1F4"/>
                                                <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                                                </svg>
                                                <input type="checkbox" name="status" id="" /></label>
                                                                                            <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                                                <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                                                <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F1F1F4"/>
                                                <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F1F1F4"/>
                                                <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                                                </svg> & below
                                                <input type="checkbox" name="status" id="" /></label>
                                          </form>
                                        </div>
                                        < div className={`${styles.date} `}>
                                          <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                                          Date Added                                          </p>
                                          <form className={styles.dateOptions}>
                                <label className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}>Last 7 days <input type="radio" name="technician" id="" /></label>
                                <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}>This Month <input type="radio" name="technician" id="" /></label>
                                <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}>Last Month <input type="radio" name="technician" id="" /></label>
                                <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}>This Quater <input type="radio" name="technician" id="" /></label>
                                <label  className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}>Select date range <input type="radio" name="technician" id="" /></label>
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
              <div>
                <div className={styles.reviewContainer}>
                    <h3 className={styles.reviewer}>
                    Omolola Akanni
                    </h3>
                    <div className={styles.stars}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                    <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                    <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                    <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                    <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                    </svg>
                    </div>
                    <p className={styles.reviewTitle}>Excellent service delivery</p>
                    <p className={styles.reviewContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. Nemo voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. </p>
                    <p className={styles.reviewDate}>12 January 2025</p>
                </div>
                <div className={styles.reviewContainer}>
                    <h3 className={styles.reviewer}>
                    Omolola Akanni
                    </h3>
                    <div className={styles.stars}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                    <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                    <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                    <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                    <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                    </svg>
                    </div>
                    <p className={styles.reviewTitle}>Excellent service delivery</p>
                    <p className={styles.reviewContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. Nemo voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. </p>
                    <p className={styles.reviewDate}>12 January 2025</p>
                </div>
                <div className={styles.reviewContainer}>
                    <h3 className={styles.reviewer}>
                    Omolola Akanni
                    </h3>
                    <div className={styles.stars}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                    <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                    <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                    <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                    <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                    </svg>
                    </div>
                    <p className={styles.reviewTitle}>Excellent service delivery</p>
                    <p className={styles.reviewContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. Nemo voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. </p>
                    <p className={styles.reviewDate}>12 January 2025</p>
                </div>
                <div className={styles.reviewContainer}>
                    <h3 className={styles.reviewer}>
                    Omolola Akanni
                    </h3>
                    <div className={styles.stars}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                    <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                    <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                    <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                    <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                    </svg>
                    </div>
                    <p className={styles.reviewTitle}>Excellent service delivery</p>
                    <p className={styles.reviewContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. Nemo voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. </p>
                    <p className={styles.reviewDate}>12 January 2025</p>
                </div>
                <div className={styles.reviewContainer}>
                    <h3 className={styles.reviewer}>
                    Omolola Akanni
                    </h3>
                    <div className={styles.stars}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                    <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                    <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                    <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                    <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                    </svg>
                    </div>
                    <p className={styles.reviewTitle}>Excellent service delivery</p>
                    <p className={styles.reviewContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. Nemo voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. </p>
                    <p className={styles.reviewDate}>12 January 2025</p>
                </div>
                <div className={styles.reviewContainer}>
                    <h3 className={styles.reviewer}>
                    Omolola Akanni
                    </h3>
                    <div className={styles.stars}><svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z" fill="#F2830D"/>
                    <path d="M29.3125 0L31.579 4.88043L36.921 5.52786L32.9798 9.19157L34.0148 14.4721L29.3125 11.856L24.6102 14.4721L25.6452 9.19157L21.704 5.52786L27.046 4.88043L29.3125 0Z" fill="#F2830D"/>
                    <path d="M50.623 0L52.8895 4.88043L58.2315 5.52786L54.2903 9.19157L55.3253 14.4721L50.623 11.856L45.9208 14.4721L46.9558 9.19157L43.0146 5.52786L48.3565 4.88043L50.623 0Z" fill="#F2830D"/>
                    <path d="M71.9355 0L74.202 4.88043L79.544 5.52786L75.6028 9.19157L76.6378 14.4721L71.9355 11.856L67.2333 14.4721L68.2683 9.19157L64.3271 5.52786L69.669 4.88043L71.9355 0Z" fill="#F2830D"/>
                    <path d="M93.248 0L95.5145 4.88043L100.856 5.52786L96.9153 9.19157L97.9503 14.4721L93.248 11.856L88.5458 14.4721L89.5808 9.19157L85.6396 5.52786L90.9815 4.88043L93.248 0Z" fill="#F1F1F4"/>
                    </svg>
                    </div>
                    <p className={styles.reviewTitle}>Excellent service delivery</p>
                    <p className={styles.reviewContent}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. Nemo voluptas sit aspernatur aut odit. Nemo enim ipsam voluptatem aut odit. </p>
                    <p className={styles.reviewDate}>12 January 2025</p>
                </div>
              </div>
      
    </section>
  );
}

export default Reviews;