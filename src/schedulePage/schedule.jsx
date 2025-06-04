import React from "react";
import styles from "./schedule.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Schedule() {
  const [showTech, setShowTech] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const handleclick = () => setShowTech(!showTech);
  const handleFilter = () => setShowFilter(!showFilter);
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `,
  };
  const [appointment, setAppointment] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // total revenue
    fetch("https://nailsavvy.vercel.app/bookings/admin/all", { headers })
      .then((response) => response.json())
      .then((data) => setAppointment(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <>
      {appointment && !loading && (
        <>
        {}
          {" "}
          <div className={styles.schedule}>
            <h1>Schedule</h1>
            <div className={styles.selector}>
              <NavLink to="/schedule" end>
                <div>Appointments</div>
              </NavLink>
              <NavLink to="/calender">
                <div>Calender</div>
              </NavLink>
            </div>
            <div className={styles.scheduleContent}>
              <div className={styles.scheduleContentHeader}>
                <div className={styles.header}>
                  <h1>Appointments</h1>
                  <div className={styles.scheduleNotification}>
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <circle cx="3" cy="3" r="3" fill="#FF9DA5" />{" "}
                    </svg>
                    <p>100</p>
                  </div>
                </div>
                <div
                  className={`${styles.filter} ${styles.px14}`}
                  onClick={handleFilter}
                >
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
                {showFilter && (
                  <div
                    className={styles.filterContent_overlay}
                    onClick={() => setShowFilter(false)}
                  >
                    <div
                      className={styles.filterContent}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className={`${styles.status} `}>
                        <p
                          className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                        >
                          Status
                        </p>
                        <form className={styles.statusOptions}>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                          >
                            Attended <input type="radio" name="status" id="" />
                          </label>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                          >
                            Pending <input type="radio" name="status" id="" />
                          </label>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                          >
                            cancelled <input type="radio" name="status" id="" />
                          </label>
                        </form>
                      </div>
                      <div className={`${styles.packages} `}>
                        <p
                          className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                        >
                          Packages
                        </p>
                        <form className={styles.packagesOptions}>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                          >
                            Single Packages{" "}
                            <input type="radio" name="packages" id="" />
                          </label>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                          >
                            Combo Packages{" "}
                            <input type="radio" name="packages" id="" />
                          </label>
                        </form>
                      </div>
                      <div className={`${styles.Technician} `}>
                        <p
                          className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                        >
                          Technician
                        </p>
                        <form className={styles.TechnicianOptions}>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                          >
                            Assigned{" "}
                            <input type="radio" name="technician" id="" />
                          </label>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                          >
                            Unassigned{" "}
                            <input type="radio" name="technician" id="" />
                          </label>
                        </form>
                      </div>
                      <div className={`${styles.serviceStation} `}>
                        <p
                          className={` ${styles.px14} ${styles.w400} ${styles.grey}`}
                        >
                          Service Station
                        </p>
                        <form className={styles.serviceStationOptions}>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                          >
                            Standard room{" "}
                            <input type="radio" name="Service Station" id="" />
                          </label>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                          >
                            VIP room{" "}
                            <input type="radio" name="Service Station" id="" />
                          </label>
                          <label
                            className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                          >
                            Double VIP room{" "}
                            <input type="radio" name="Service Station" id="" />
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
                {showTech && (
                  <div
                    className={styles.assignTech_overlay}
                    onClick={() => setShowTech(false)}
                  >
                    <div
                      className={styles.assignTech_content}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className={styles.close_icon}>
                        <svg
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => setShowTech(false)}
                        >
                          <path
                            d="M21 1.5L1 21.5M1 1.5L21 21.5"
                            stroke="#FF6C78"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p>Assign Technician</p>
                      <div className={styles.filter_tech_list}>
                        <div className={`${styles.flex} ${styles.justify}`}>
                          <div className={styles.search_tech}>
                            <svg
                              width="18"
                              height="17"
                              viewBox="0 0 18 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.5 16L12.875 12.375M14.8333 7.66667C14.8333 11.3486 11.8486 14.3333 8.16667 14.3333C4.48477 14.3333 1.5 11.3486 1.5 7.66667C1.5 3.98477 4.48477 1 8.16667 1C11.8486 1 14.8333 3.98477 14.8333 7.66667Z"
                                stroke="#A1A1AA"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <input
                              type="search"
                              placeholder="Search technician...."
                              id={styles.tech_list_filter}
                            />
                          </div>
                          <div className={styles.filter_button}>
                            <p>Filter</p>
                            <svg
                              width="18"
                              height="13"
                              viewBox="0 0 18 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6.5H14M1.5 1.5H16.5M6.5 11.5H11.5"
                                stroke="#A1A1AA"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className={styles.tech_list_content}>
                          <div className={styles.tech_info}>
                            <div className={styles.tech_info_header}>
                              <div className={styles.techAvailable}>
                                <svg
                                  width="6"
                                  height="7"
                                  viewBox="0 0 6 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="3"
                                    cy="3.5"
                                    r="3"
                                    fill="#16A34A"
                                  />
                                </svg>
                                <p>Available</p>
                              </div>
                              <div>Assign Technician</div>
                            </div>
                            <div className={styles.tech_details_body}>
                              <div className={styles.tech_details}>
                                <svg
                                  width="40"
                                  height="41"
                                  viewBox="0 0 40 41"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="0.5"
                                    y="1"
                                    width="39"
                                    height="39"
                                    rx="19.5"
                                    fill="#FFF5F6"
                                  />
                                  <rect
                                    x="0.5"
                                    y="1"
                                    width="39"
                                    height="39"
                                    rx="19.5"
                                    stroke="#E4E4E7"
                                  />
                                  <path
                                    d="M26.6668 28V26.3333C26.6668 25.4493 26.3156 24.6014 25.6905 23.9763C25.0654 23.3512 24.2176 23 23.3335 23H16.6668C15.7828 23 14.9349 23.3512 14.3098 23.9763C13.6847 24.6014 13.3335 25.4493 13.3335 26.3333V28M23.3335 16.3333C23.3335 18.1743 21.8411 19.6667 20.0002 19.6667C18.1592 19.6667 16.6668 18.1743 16.6668 16.3333C16.6668 14.4924 18.1592 13 20.0002 13C21.8411 13 23.3335 14.4924 23.3335 16.3333Z"
                                    stroke="#FF6C78"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <div className={styles.tech_name}>
                                  <p
                                    className={`${styles.px14} ${styles.w400}`}
                                  >
                                    Omotola Akande
                                  </p>
                                  <p
                                    className={`${styles.px12} ${styles.grey}`}
                                  >
                                    id:NS87796
                                  </p>
                                </div>
                              </div>
                              <div className={`${styles.role} `}>
                                <p className={`${styles.px14} ${styles.w400} `}>
                                  Nail Polish and Treatment
                                </p>
                                <p className={`${styles.px12} ${styles.grey}`}>
                                  Technician
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.container}>
                <table className={styles.scheduleTable}>
                  <thead className={styles.scheduleTableHead}>
                    <tr>
                      <th>Name</th>
                      <th> Booking ID</th>
                      <th>Service</th>
                      <th>Date and Time</th>
                      <th>Technician</th>
                      <th>Service Station</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment.map((appointment) => (
                      <tr>
                        <td>
                          <h2 >{appointment.name ? appointment?.name : appointment?.user?.name}</h2>
                          <h2>{appointment.email ? appointment?.email : appointment?.user?.email}</h2>
                        </td>
                        <td>
                          <h2>{appointment.refNo}</h2>
                        </td>
                        <td>
                          <h2>BIAB (Builder in a Bottle)</h2>
                          <h2>Single Packages</h2>
                        </td>
                        <td>
                          <h2>{appointment.date}</h2>
                          <h2>{appointment.time}</h2>
                        </td>
                        <td>
                          <div onClick={handleclick}>Assign Technician</div>
                        </td>
                        <td>
                          <h2>4:00 PM</h2>
                        </td>
                        <td>{appointment.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Schedule;
