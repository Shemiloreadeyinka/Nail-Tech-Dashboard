import { useEffect, useState } from "react";
import OverviewDetails from "../overviewdetails/overviewDetails";
import styles from "./overview.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  PointElement,
  LinearScale,
  CategoryScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Overview() {
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const [showTech, setShowTech] = useState(false);
  const handleclick = () => setShowTech(!showTech);
  const handleFilterclick = () => setTechfilter(!techFilter);
  const [techFilter, setTechfilter] = useState(false);
  const [TotalRevenue, setTotalRevenue] = useState(null);
  const [TotalServiceSales, setTotalServiceSales] = useState(null);
  const [TotalProduct, setTotalProductSales] = useState(null);
  const [TotalVoucherSales, setTotalVoucherSales] = useState(null);
  const [nextBookedAppointment, setnextBookedAppointment] = useState(null);
  const [upcomingAppointments, setupcomingAppointments] = useState(null);
  const [recentSales, setRecentSales] = useState(null);
  const [topBookedServices, setTopbookedServices] = useState(false);
  const headers = { Authorization: `Bearer ${apiToken} ` };
  console.log(techFilter)
  useEffect(() => {
    // total revenue
    fetch("https://nailsavvy.vercel.app/admin/total-revenue", { headers })
      .then((response) => response.json())
      .then((data) => setTotalRevenue(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    // service sales
    fetch("https://nailsavvy.vercel.app/admin/total-booking-sales", { headers })
      .then((response) => response.json())
      .then((data) => setTotalServiceSales(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    //product sales
    fetch("https://nailsavvy.vercel.app/admin/total-order-sales", { headers })
      .then((response) => response.json())
      .then((data) => setTotalProductSales(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    //voucher sales
    fetch("https://nailsavvy.vercel.app/admin/total-voucher-sales", { headers })
      .then((response) => response.json())
      .then((data) => setTotalVoucherSales(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    //next booked appointment
    fetch("https://nailsavvy.vercel.app/admin/todays-next-booked-appointment", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => setnextBookedAppointment(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    //upcoming appointments
    fetch("https://nailsavvy.vercel.app/admin/upcoming-appointments", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => setupcomingAppointments(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    //recent sale
    fetch("https://nailsavvy.vercel.app/admin/recent-sales", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => setRecentSales(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    //Top booked services
    fetch("https://nailsavvy.vercel.app/admin/top-booked-services", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => setTopbookedServices(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  //  console.log(recentSales.serviceType.name)
  return (
    <>
      <section className={styles.overview}>
        <h1>Overview</h1>
        <div className={styles.chart}>
          <div className={styles.chartLegend}>
            <OverviewDetails
              header="Total Sales Revenue"
              value={`₦${Number(TotalRevenue).toLocaleString()}`}
              theme="#FAFAFF"
              border="#D9D6FE"
              svg={
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.94 9.075C2.94 9.35114 3.16386 9.575 3.44 9.575C3.71614 9.575 3.94 9.35114 3.94 9.075H2.94ZM3.94 8.04C3.94 7.76386 3.71614 7.54 3.44 7.54C3.16386 7.54 2.94 7.76386 2.94 8.04H3.94ZM5.5 9.075C5.5 9.35114 5.72386 9.575 6 9.575C6.27614 9.575 6.5 9.35114 6.5 9.075H5.5ZM6.5 7.005C6.5 6.72886 6.27614 6.505 6 6.505C5.72386 6.505 5.5 6.72886 5.5 7.005H6.5ZM8.06 9.075C8.06 9.35114 8.28386 9.575 8.56 9.575C8.83614 9.575 9.06 9.35114 9.06 9.075H8.06ZM9.06 5.965C9.06 5.68886 8.83614 5.465 8.56 5.465C8.28386 5.465 8.06 5.68886 8.06 5.965H9.06ZM8.56 2.925H9.06V2.425H8.56V2.925ZM8.33 3.195L8.7099 3.52008L8.71062 3.51923L8.33 3.195ZM3.31903 5.72985C3.05109 5.79666 2.88805 6.06803 2.95485 6.33597C3.02166 6.60391 3.29303 6.76695 3.56097 6.70015L3.31903 5.72985ZM7.095 2.425C6.81886 2.425 6.595 2.64886 6.595 2.925C6.595 3.20114 6.81886 3.425 7.095 3.425V2.425ZM8.06 4.385C8.06 4.66114 8.28386 4.885 8.56 4.885C8.83614 4.885 9.06 4.66114 9.06 4.385H8.06ZM3.94 9.075V8.04H2.94V9.075H3.94ZM6.5 9.075V7.005H5.5V9.075H6.5ZM9.06 9.075V5.965H8.06V9.075H9.06ZM8.17938 2.60077L7.94938 2.87077L8.71062 3.51923L8.94062 3.24923L8.17938 2.60077ZM7.9501 2.86992C6.74293 4.28066 5.12356 5.27991 3.31903 5.72985L3.56097 6.70015C5.56644 6.20009 7.36707 5.08934 8.7099 3.52008L7.9501 2.86992ZM7.095 3.425H8.56V2.425H7.095V3.425ZM8.06 2.925V4.385H9.06V2.925H8.06ZM4.5 11.5H7.5V10.5H4.5V11.5ZM7.5 11.5C8.79931 11.5 9.83891 11.2432 10.5411 10.5411C11.2432 9.83891 11.5 8.79931 11.5 7.5H10.5C10.5 8.70069 10.2568 9.41109 9.83395 9.83395C9.41109 10.2568 8.70069 10.5 7.5 10.5V11.5ZM11.5 7.5V4.5H10.5V7.5H11.5ZM11.5 4.5C11.5 3.20069 11.2432 2.16109 10.5411 1.45895C9.83891 0.756801 8.79931 0.5 7.5 0.5V1.5C8.70069 1.5 9.41109 1.7432 9.83395 2.16605C10.2568 2.58891 10.5 3.29931 10.5 4.5H11.5ZM7.5 0.5H4.5V1.5H7.5V0.5ZM4.5 0.5C3.20069 0.5 2.16109 0.756801 1.45895 1.45895C0.756801 2.16109 0.5 3.20069 0.5 4.5H1.5C1.5 3.29931 1.7432 2.58891 2.16605 2.16605C2.58891 1.7432 3.29931 1.5 4.5 1.5V0.5ZM0.5 4.5V7.5H1.5V4.5H0.5ZM0.5 7.5C0.5 8.79931 0.756801 9.83891 1.45895 10.5411C2.16109 11.2432 3.20069 11.5 4.5 11.5V10.5C3.29931 10.5 2.58891 10.2568 2.16605 9.83395C1.7432 9.41109 1.5 8.70069 1.5 7.5H0.5Z"
                    fill="#7A5AF8"
                  />
                </svg>
              }
            />
            <OverviewDetails
              header="Total Service Sales"
              value={`₦${Number(TotalServiceSales).toLocaleString()}`}
              theme="#FEF6FB"
              border="#FCCEEE"
              svg={
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 1V2.5M7 1V2.5M0.75 4.545H9.25M6.685 11C7.035 11.315 7.495 11.5 8 11.5C8.73 11.5 9.365 11.11 9.71 10.53C9.895 10.23 10 9.875 10 9.5C10 8.995 9.81 8.53499 9.5 8.17999M6.685 11C6.53 10.87 6.395 10.71 6.29 10.53C6.105 10.23 6 9.875 6 9.5C6 8.395 6.895 7.5 8 7.5C8.6 7.5 9.135 7.76499 9.5 8.17999M6.685 11H3C1.25 11 0.5 10 0.5 8.5V4.25C0.5 2.75 1.25 1.75 3 1.75H7C8.75 1.75 9.5 2.75 9.5 4.25V8.17999M7.22 9.5L7.715 9.995L8.78 9.00999M4.99774 6.85001H5.00223M3.14716 6.85001H3.15165M3.14716 8.35001H3.15165"
                    stroke="#EE46BC"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
            <OverviewDetails
              header="Total Product Sales"
              value={`₦${Number(TotalProduct).toLocaleString()}`}
              theme="#FBF8F5"
              border="#E7D8C4"
              svg={
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H1.87C2.41 1 2.835 1.465 2.79 2L2.375 6.98C2.305 7.795 2.95 8.495 3.77 8.495H9.095C9.815 8.495 10.445 7.905 10.5 7.19L10.77 3.44C10.83 2.61 10.2 1.935 9.365 1.935H2.91M4.5 4H10.5M8.75 10.375C8.75 10.7202 8.47018 11 8.125 11C7.77982 11 7.5 10.7202 7.5 10.375C7.5 10.0298 7.77982 9.75 8.125 9.75C8.47018 9.75 8.75 10.0298 8.75 10.375ZM4.75 10.375C4.75 10.7202 4.47018 11 4.125 11C3.77982 11 3.5 10.7202 3.5 10.375C3.5 10.0298 3.77982 9.75 4.125 9.75C4.47018 9.75 4.75 10.0298 4.75 10.375Z"
                    stroke="#978266"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
            <OverviewDetails
              header="Total Voucher Sales"
              value={`₦${Number(TotalVoucherSales).toLocaleString()}`}
              theme="#FAFAFA"
              border="#E4E4E7"
              svg={
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.49658 1V2.75M4.49658 7.25V9M8.49744 1H3.49744C1.58244 1 1.04744 1.46 1.00244 3.25C1.96744 3.25 2.74744 4.035 2.74744 5C2.74744 5.965 1.96744 6.745 1.00244 6.75C1.04744 8.54 1.58244 9 3.49744 9H8.49744C10.4974 9 10.9974 8.5 10.9974 6.5V3.5C10.9974 1.5 10.4974 1 8.49744 1ZM7.51244 3.665L7.82244 4.29C7.85244 4.35 7.91244 4.395 7.97744 4.405L8.66744 4.505C8.83744 4.53 8.90744 4.74 8.78244 4.86L8.28244 5.345C8.23244 5.39 8.21244 5.46 8.22244 5.53L8.34244 6.215C8.37244 6.385 8.19244 6.515 8.04244 6.435L7.42744 6.11C7.36744 6.08 7.29244 6.08 7.23244 6.11L6.61744 6.435C6.46244 6.515 6.28744 6.385 6.31744 6.215L6.43744 5.53C6.44744 5.46 6.42744 5.395 6.37744 5.345L5.88244 4.86C5.75744 4.74 5.82744 4.53 5.99744 4.505L6.68744 4.405C6.75744 4.395 6.81244 4.355 6.84244 4.29L7.14744 3.665C7.21744 3.51 7.43744 3.51 7.51244 3.665Z"
                    stroke="#61616B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <div className={styles.graph}>
          <div className={styles.graph__header}>
            <div>
              <h2>Revenue</h2>
              <h3>Earnings over time</h3>
            </div>
            <div>
              <select name="dropdown" id={styles.dropdown} className="px14">
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="This Month">This Month</option>
                <option value="This Quater">This Quater</option>
                <option value="This Year" selected>
                  This Year
                </option>
              </select>
            </div>
          </div>
          <div className={styles.graph__body}>
            <Bar
              data={{
                labels: [
                  "JAN",
                  "FEB",
                  "MAR",
                  "APR",
                  "MAY",
                  "JUN",
                  "JULY",
                  "AUG",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DEC",
                ],
                datasets: [
                  {
                    label: "Service",
                    data: [
                      1000, 0, 1550, 550, 550, 550, 550, 550, 550, 550, 550,
                      550,
                    ],
                    backgroundColor: ["rgb(255, 108, 120)"],
                    barPercentage: 1,
                    categoryPercentage: 0.7,
                    barThickness: 20,
                  },
                  {
                    label: "Product",
                    data: [
                      1200, 300, 400, 200, 300, 400, 2020, 300, 4060, 200, 300,
                      400,
                    ],
                    backgroundColor: ["rgba(255, 157, 165, 1)"],
                    barPercentage: 1,
                    categoryPercentage: 0.7,
                    barThickness: 20,
                  },
                  {
                    label: "Voucher",
                    data: [
                      1000, 300, 400, 200, 300, 400, 200, 300, 400, 2400, 300,
                      2000,
                    ],
                    backgroundColor: ["rgba(255, 209, 213, 1)"],
                    barPercentage: 1,
                    categoryPercentage: 0.7,
                    barThickness: 20,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    ticks: {
                      padding: 0,
                    },

                    grid: {
                      display: false,
                      borderColor: "transparent",
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Total (₦)",
                      color: "rgba(113, 113, 122, 1)",
                      align: "end",
                      font: {
                        size: 12, // Font size
                        weight: 400, // Font weight
                      },
                    },
                    grid: {
                      color: "rgba(228, 228, 231, 1)",
                      lineWidth: 0.5,
                    },
                    border: {
                      display: false,
                      dash: [3],
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: true, // Show legend
                    position: "top", // Positions: 'top', 'left', 'bottom', 'right'
                    align: "end",
                    labels: {
                      font: {
                        size: 14, // Font size
                        weight: 400, // Font weight
                      },
                      color: "rgba(24, 24, 27, 1)", // Legend text color
                      boxWidth: 12, // Box size
                      boxHeight: 12,
                      padding: 15, // Space around legend items
                      borderRadius: 6,
                      useBorderRadius: true,
                    },
                  },
                },
              }}
              width={1032}
              // height={295}
            />
          </div>
        </div>
      </section>
      <section className={styles.overview_data}>
        <div className={styles.data_item}>
          <div className={styles.data_head}>
            <div className={styles.data_head_icon}>
              <div>
                <svg
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66667 1.66675V5.66675M18.3333 1.66675V5.66675M1.66667 11.1201H24.3333M17.4933 28.3334C18.4267 29.1734 19.6533 29.6667 21 29.6667C22.9467 29.6667 24.64 28.6267 25.56 27.0801C26.0533 26.2801 26.3333 25.3334 26.3333 24.3334C26.3333 22.9867 25.8267 21.7601 25 20.8134M17.4933 28.3334C17.08 27.9867 16.72 27.5601 16.44 27.0801C15.9467 26.2801 15.6667 25.3334 15.6667 24.3334C15.6667 21.3867 18.0533 19.0001 21 19.0001C22.6 19.0001 24.0267 19.7067 25 20.8134M17.4933 28.3334H7.66667C3 28.3334 1 25.6667 1 21.6667V10.3334C1 6.33341 3 3.66675 7.66667 3.66675H18.3333C23 3.66675 25 6.33341 25 10.3334V20.8134M18.92 24.3334L20.24 25.6534L23.08 23.0267M12.994 17.2668H13.006M8.05908 17.2668H8.07106M8.05908 21.2668H8.07106"
                    stroke="#FF6C78"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Today’s next appointment</div>
            </div>
            <div className={styles.see_more}>
              <p>view details </p>
              <div>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 11L6.5 6L1.5 1"
                    stroke="#61616B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.data_body}>
                      {showTech && (
                        <div
                          className={styles.assignTech_overlay}
                          onClick={() => (setShowTech(false) ,setTechfilter(false))}
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
                                onClick={() => (setShowTech(false),setTechfilter(false))}
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
                                <div className={styles.filter_button} onClick={handleFilterclick}>
                                  <p >Filter</p>
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
                                        {techFilter && (
                                          <div
                                            className={styles.filterContent_overlay}
                                            onClick={() => handleFilterclick(false)}
                                          >
                                            <div
                                              className={styles.filterContent}
                                              onClick={(e) => e.stopPropagation()}
                                            >
                                              <div className={`${styles.stock} `}>
                                                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                                                  Status
                                                </p>
                                                <form className={styles.stockOptions}>
                                                  <label
                                                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                                                  >
                                                  Available <input type="radio" name="status" id="" />
                                                  </label>
                                                  <label
                                                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                                                  >
                                                    Unavailable<input type="radio" name="status" id="" />
                                                  </label>
                                                </form>
                                              </div>
                                              <div className={`${styles.quantity} `}>
                                                <p className={` ${styles.px14} ${styles.w400} ${styles.grey}`}>
                                                  Department
                                                </p>
                                                <form className={styles.quantityOptions}>
                                                  <label
                                                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400} `}
                                                  >
                                                   Nail Polish and Treatment
                                                    <input type="radio" name="packages" id="" />
                                                  </label>
                                                  <label
                                                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                                                  >
                                                   Pedicure
                                                    <input type="radio" name="packages" id="" />
                                                  </label>
                                                  <label
                                                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                                                  >
                                                   Spa
                                                    <input type="radio" name="packages" id="" />
                                                  </label>
                                                  <label
                                                    className={`${styles.flex} ${styles.justify} ${styles.align} ${styles.w400}`}
                                                  >
                                                   Other
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
                                        <circle cx="3" cy="3.5" r="3" fill="#16A34A" />
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
                                        <p className={`${styles.px14} ${styles.w400}`}>
                                          Omotola Akande
                                        </p>
                                        <p className={`${styles.px12} ${styles.grey}`}>
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
            {nextBookedAppointment ? (
              <div className={styles.bookingDetails}>
                <h2>Booking Details</h2>
                <div className={styles.bookingService}>
                  <p>Service</p>{" "}
                  <p>
                    {nextBookedAppointment.serviceType?.name || "Loading..."}
                  </p>
                </div>
                <div className={styles.bookingDateTime}>
                  <div className={styles.bookingDate}>
                    <p>Date</p>
                    <p>
                      {new Date(nextBookedAppointment.date).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                  <div className={styles.bookingtime}>
                    <p>Time</p> <p>{nextBookedAppointment.time}</p>
                  </div>
                </div>
                <div className={styles.bookingStatusService}>
                  <div className={styles.bookingStatus}>
                    {" "}
                    <p>Status</p>
                    <p>{nextBookedAppointment.status}</p>
                  </div>
                  <div className={styles.bookingServiceStation}>
                    <p>Service station</p><p>{nextBookedAppointment.serviceStations.map((ss)=>(ss.name))} </p>
                  </div>
                </div>
                <div onClick={handleclick}> Assign Technician</div>
              </div>
            ) : (
              <>
                {" "}
                <svg
                  width="68"
                  height="75"
                  viewBox="0 0 68 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6667 2.66675V12.6667M45.3333 2.66675V12.6667M3.66667 26.3001H60.3333M43.2333 69.3334C45.5667 71.4334 48.6333 72.6667 52 72.6667C56.8667 72.6667 61.1 70.0667 63.4 66.2001C64.6333 64.2001 65.3333 61.8334 65.3333 59.3334C65.3333 55.9667 64.0667 52.9 62 50.5334M43.2333 69.3334C42.2 68.4667 41.3 67.4001 40.6 66.2001C39.3667 64.2001 38.6667 61.8334 38.6667 59.3334C38.6667 51.9667 44.6333 46.0001 52 46.0001C56 46.0001 59.5667 47.7667 62 50.5334M43.2333 69.3334H18.6667C7 69.3334 2 62.6667 2 52.6667V24.3334C2 14.3334 7 7.66675 18.6667 7.66675H45.3333C57 7.66675 62 14.3334 62 24.3334V50.5334M46.8 59.3334L50.1 62.6334L57.2 56.0667M31.9849 41.6668H32.0149M19.6477 41.6668H19.6776M19.6477 51.6668H19.6776"
                    stroke="#FF6C78"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3>No Appointments today</h3>
              </>
            )}
          </div>
        </div>

        <div className={styles.data_item}>
          <div className={styles.data_head}>
            <div className={styles.data_head_icon}>
              <div>
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66667 1.66675V5.66675M18.3333 1.66675V5.66675M1.66667 11.1201H24.3333M17.9263 17.2668H17.9382M17.9263 21.2668H17.9382M12.994 17.2668H13.006M12.994 21.2668H13.006M8.05908 17.2668H8.07106M8.05908 21.2668H8.07106M25 10.3334V21.6667C25 25.6667 23 28.3334 18.3333 28.3334H7.66667C3 28.3334 1 25.6667 1 21.6667V10.3334C1 6.33341 3 3.66675 7.66667 3.66675H18.3333C23 3.66675 25 6.33341 25 10.3334Z"
                    stroke="#FF6C78"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Upcoming appointments</div>
            </div>
            <div className={styles.see_more}>
              <p>See all</p>
              <div>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 11L6.5 6L1.5 1"
                    stroke="#61616B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.data_body}>
            {upcomingAppointments ? (
              <div className={styles.upcomingAppointmentsBody}>
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id}>
                    <div className={styles.upcomingAppointmentsService}>
                      <p>Service</p> <p>{appointment.serviceType.name}</p>
                    </div>
                    <div className={styles.upcomingAppointmentsDate}>
                      <div>
                        <p>Date</p>
                        <p>{appointment.date}</p>
                      </div>
                      <div>
                        <p>Time</p>
                        <p>{appointment.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <svg
                  width="64"
                  height="72"
                  viewBox="0 0 64 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6667 2.66675V12.6667M45.3333 2.66675V12.6667M3.66667 26.3001H60.3333M44.3157 41.6668H44.3456M44.3157 51.6668H44.3456M31.9849 41.6668H32.0149M31.9849 51.6668H32.0149M19.6477 41.6668H19.6776M19.6477 51.6668H19.6776M62 24.3334V52.6668C62 62.6668 57 69.3334 45.3333 69.3334H18.6667C7 69.3334 2 62.6668 2 52.6668V24.3334C2 14.3334 7 7.66675 18.6667 7.66675H45.3333C57 7.66675 62 14.3334 62 24.3334Z"
                    stroke="#FF6C78"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3>Your Schedule is empty</h3>
              </>
            )}
          </div>
        </div>
        <div className={styles.data_item}>
          <div className={styles.data_head}>
            <div className={styles.data_head_icon}>
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.17366 23.2C7.17366 23.7522 7.62137 24.2 8.17366 24.2C8.72594 24.2 9.17366 23.7522 9.17366 23.2H7.17366ZM9.17366 20.44C9.17366 19.8877 8.72594 19.44 8.17366 19.44C7.62137 19.44 7.17366 19.8877 7.17366 20.44H9.17366ZM14.0003 23.2C14.0003 23.7522 14.448 24.2 15.0003 24.2C15.5526 24.2 16.0003 23.7522 16.0003 23.2H14.0003ZM16.0003 17.68C16.0003 17.1277 15.5526 16.68 15.0003 16.68C14.448 16.68 14.0003 17.1277 14.0003 17.68H16.0003ZM20.827 23.2C20.827 23.7522 21.2747 24.2 21.827 24.2C22.3793 24.2 22.827 23.7522 22.827 23.2H20.827ZM22.827 14.9066C22.827 14.3543 22.3793 13.9066 21.827 13.9066C21.2747 13.9066 20.827 14.3543 20.827 14.9066H22.827ZM21.827 6.79996H22.827V5.79996H21.827V6.79996ZM21.2137 7.51996L21.9735 8.17012L21.9749 8.16843L21.2137 7.51996ZM7.93172 14.603C7.39585 14.7366 7.06975 15.2794 7.20337 15.8152C7.33698 16.3511 7.87972 16.6772 8.4156 16.5436L7.93172 14.603ZM17.9203 5.79996C17.368 5.79996 16.9203 6.24767 16.9203 6.79996C16.9203 7.35224 17.368 7.79996 17.9203 7.79996V5.79996ZM20.827 10.6933C20.827 11.2456 21.2747 11.6933 21.827 11.6933C22.3793 11.6933 22.827 11.2456 22.827 10.6933H20.827ZM9.17366 23.2V20.44H7.17366V23.2H9.17366ZM16.0003 23.2V17.68H14.0003V23.2H16.0003ZM22.827 23.2V14.9066H20.827V23.2H22.827ZM21.0658 6.15149L20.4524 6.87149L21.9749 8.16843L22.5882 7.44843L21.0658 6.15149ZM20.4539 6.8698C17.1895 10.6846 12.8108 13.3864 7.93172 14.603L8.4156 16.5436C13.6965 15.2268 18.4378 12.302 21.9735 8.17012L20.4539 6.8698ZM17.9203 7.79996H21.827V5.79996H17.9203V7.79996ZM20.827 6.79996V10.6933H22.827V6.79996H20.827ZM11.0003 29.3333H19.0003V27.3333H11.0003V29.3333ZM19.0003 29.3333C22.4323 29.3333 25.0948 28.653 26.8741 26.8737C28.6534 25.0944 29.3337 22.4319 29.3337 19H27.3337C27.3337 22.2347 26.6806 24.2388 25.4599 25.4595C24.2392 26.6802 22.235 27.3333 19.0003 27.3333V29.3333ZM29.3337 19V11H27.3337V19H29.3337ZM29.3337 11C29.3337 7.568 28.6534 4.90548 26.8741 3.12619C25.0948 1.34689 22.4323 0.666626 19.0003 0.666626V2.66663C22.235 2.66663 24.2392 3.31969 25.4599 4.5404C26.6806 5.76111 27.3337 7.76526 27.3337 11H29.3337ZM19.0003 0.666626H11.0003V2.66663H19.0003V0.666626ZM11.0003 0.666626C7.56836 0.666626 4.90584 1.34689 3.12655 3.12619C1.34726 4.90548 0.666992 7.568 0.666992 11H2.66699C2.66699 7.76526 3.32006 5.76111 4.54077 4.5404C5.76147 3.31969 7.76562 2.66663 11.0003 2.66663V0.666626ZM0.666992 11V19H2.66699V11H0.666992ZM0.666992 19C0.666992 22.4319 1.34726 25.0944 3.12655 26.8737C4.90584 28.653 7.56836 29.3333 11.0003 29.3333V27.3333C7.76562 27.3333 5.76147 26.6802 4.54077 25.4595C3.32006 24.2388 2.66699 22.2347 2.66699 19H0.666992Z"
                    fill="#FF6C78"
                  />
                </svg>
              </div>
              <div>Recent sales</div>
            </div>
          </div>
          <div className={styles.data_body}>
            {recentSales ? (
              <div className={styles.recentSalesBody}>
                  <table className={styles.recentSalesTable}>
                    <thead>
                      <tr>
                        <th>Item type</th>
                        <th>Quantity</th>
                        <th>Total (₦)</th>
                      </tr>
                    </thead>
                    {recentSales.map((sales) => (
                    <tbody key={sales.id}>
                      <tr>
                        {/* {   console.log(sales.serviceType)
} */}
                        {/* <td>{sales.serviceType.name}</td>
                        <td>{sales.number}</td>
                        <td>{sales.serviceType.price}</td> */}
                      </tr>
                    </tbody>))}
                  </table>
                
              </div>
            ) : (
              <>
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9337 56.5C16.9337 57.6045 17.8291 58.5 18.9337 58.5C20.0382 58.5 20.9337 57.6045 20.9337 56.5H16.9337ZM20.9337 49.6C20.9337 48.4954 20.0382 47.6 18.9337 47.6C17.8291 47.6 16.9337 48.4954 16.9337 49.6H20.9337ZM34.0003 56.5C34.0003 57.6045 34.8958 58.5 36.0003 58.5C37.1049 58.5 38.0003 57.6045 38.0003 56.5H34.0003ZM38.0003 42.7C38.0003 41.5954 37.1049 40.7 36.0003 40.7C34.8958 40.7 34.0003 41.5954 34.0003 42.7H38.0003ZM51.067 56.5C51.067 57.6045 51.9624 58.5 53.067 58.5C54.1716 58.5 55.067 57.6045 55.067 56.5H51.067ZM55.067 35.7666C55.067 34.6621 54.1716 33.7666 53.067 33.7666C51.9624 33.7666 51.067 34.6621 51.067 35.7666H55.067ZM53.067 15.5H55.067V13.5H53.067V15.5ZM51.5337 17.3L53.0533 18.6003L53.0561 18.5969L51.5337 17.3ZM18.4498 35.4927C17.378 35.7599 16.7258 36.8454 16.9931 37.9172C17.2603 38.9889 18.3458 39.6411 19.4175 39.3739L18.4498 35.4927ZM43.3003 13.5C42.1958 13.5 41.3003 14.3954 41.3003 15.5C41.3003 16.6045 42.1958 17.5 43.3003 17.5V13.5ZM51.067 25.2333C51.067 26.3379 51.9624 27.2333 53.067 27.2333C54.1716 27.2333 55.067 26.3379 55.067 25.2333H51.067ZM20.9337 56.5V49.6H16.9337V56.5H20.9337ZM38.0003 56.5V42.7H34.0003V56.5H38.0003ZM55.067 56.5V35.7666H51.067V56.5H55.067ZM51.5445 14.203L50.0112 16.003L53.0561 18.5969L54.5895 16.7969L51.5445 14.203ZM50.0141 15.9996C41.7854 25.6159 30.7479 32.4263 18.4498 35.4927L19.4175 39.3739C32.5194 36.107 44.282 28.8507 53.0533 18.6003L50.0141 15.9996ZM43.3003 17.5H53.067V13.5H43.3003V17.5ZM51.067 15.5V25.2333H55.067V15.5H51.067ZM26.0003 71.3333H46.0003V67.3333H26.0003V71.3333ZM46.0003 71.3333C54.5309 71.3333 61.0226 69.6394 65.3312 65.3308C69.6398 61.0223 71.3337 54.5306 71.3337 46H67.3337C67.3337 54.136 65.6942 59.311 62.5028 62.5024C59.3114 65.6938 54.1364 67.3333 46.0003 67.3333V71.3333ZM71.3337 46V26H67.3337V46H71.3337ZM71.3337 26C71.3337 17.4694 69.6398 10.9777 65.3312 6.66908C61.0226 2.3605 54.5309 0.666626 46.0003 0.666626V4.66663C54.1364 4.66663 59.3114 6.30609 62.5028 9.49751C65.6942 12.6889 67.3337 17.8639 67.3337 26H71.3337ZM46.0003 0.666626H26.0003V4.66663H46.0003V0.666626ZM26.0003 0.666626C17.4697 0.666626 10.978 2.3605 6.66945 6.66908C2.36086 10.9777 0.666992 17.4694 0.666992 26H4.66699C4.66699 17.8639 6.30646 12.6889 9.49787 9.49751C12.6893 6.30609 17.8643 4.66663 26.0003 4.66663V0.666626ZM0.666992 26V46H4.66699V26H0.666992ZM0.666992 46C0.666992 54.5306 2.36086 61.0223 6.66945 65.3308C10.978 69.6394 17.4697 71.3333 26.0003 71.3333V67.3333C17.8643 67.3333 12.6893 65.6938 9.49787 62.5024C6.30646 59.311 4.66699 54.136 4.66699 46H0.666992Z"
                    fill="#FF6C78"
                  />
                </svg>
                <h3>No Sales data yet</h3>
              </>
            )}
          </div>
        </div>
        <div className={styles.data_item}>
          <div className={styles.data_head}>
            <div className={styles.data_head_icon}>
              <div>
                <svg
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66667 1.66675V5.66675M18.3333 1.66675V5.66675M1.66667 11.1201H24.3333M17.4933 28.3334C18.4267 29.1734 19.6533 29.6667 21 29.6667C22.9467 29.6667 24.64 28.6267 25.56 27.0801C26.0533 26.2801 26.3333 25.3334 26.3333 24.3334C26.3333 22.9867 25.8267 21.7601 25 20.8134M17.4933 28.3334C17.08 27.9867 16.72 27.5601 16.44 27.0801C15.9467 26.2801 15.6667 25.3334 15.6667 24.3334C15.6667 21.3867 18.0533 19.0001 21 19.0001C22.6 19.0001 24.0267 19.7067 25 20.8134M17.4933 28.3334H7.66667C3 28.3334 1 25.6667 1 21.6667V10.3334C1 6.33341 3 3.66675 7.66667 3.66675H18.3333C23 3.66675 25 6.33341 25 10.3334V20.8134M18.92 24.3334L20.24 25.6534L23.08 23.0267M12.994 17.2668H13.006M8.05908 17.2668H8.07106M8.05908 21.2668H8.07106"
                    stroke="#FF6C78"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div></div>
              </div>
              <div>Top booked services</div>
            </div>
          </div>
          <div className={styles.data_body}>
            {topBookedServices ? (<div className={styles.topBookedServicesBody}>

                  { <table className={styles.topBookedServicesTable}>
                    <thead>
                      <tr>
                        <th>Item type</th>
                        <th>Quantity</th>
                        <th>Total (₦)</th>
                      </tr>
                    </thead><tbody >
                    {topBookedServices.map((service) => (
                    
                      <tr>
                      
                  <td>{service.services.map((services)=>services).map(servicename=>servicename).map(name=>name).map(name=>name.name).map((item, index) => (<p key={index}>{item}</p>))}</td>
                      <td>{service.services.map((services)=>services).map(servicename=>servicename).map(name=>name).map(name=>name.count).map((item, index) => (<p key={index}>{item}</p>))}</td>
                      <td>{service.services.map((services)=>services).map(servicename=>servicename).map(name=>name).map(name=>name.totalPrice).map((item, index) => (<p key={index}>{item}</p>))}</td>
                  {/* <td>{service.packageType.price}</td> */}
                      </tr>
                    ))}
                     </tbody> 
            </table>}
                
              </div>):(<><svg
              width="68"
              height="75"
              viewBox="0 0 68 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6667 2.66663V12.6666M45.3333 2.66663V12.6666M3.66667 26.2999H60.3333M43.2333 69.3333C45.5667 71.4333 48.6333 72.6666 52 72.6666C56.8667 72.6666 61.1 70.0666 63.4 66.1999C64.6333 64.1999 65.3333 61.8333 65.3333 59.3333C65.3333 55.9666 64.0667 52.8999 62 50.5332M43.2333 69.3333C42.2 68.4666 41.3 67.3999 40.6 66.1999C39.3667 64.1999 38.6667 61.8333 38.6667 59.3333C38.6667 51.9666 44.6333 46 52 46C56 46 59.5667 47.7666 62 50.5332M43.2333 69.3333H18.6667C7 69.3333 2 62.6666 2 52.6666V24.3333C2 14.3333 7 7.66663 18.6667 7.66663H45.3333C57 7.66663 62 14.3333 62 24.3333V50.5332M46.8 59.3333L50.1 62.6333L57.2 56.0666M31.9849 41.6667H32.0149M19.6477 41.6667H19.6776M19.6477 51.6667H19.6776"
                stroke="#FF6C78"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>No data available yet</h3></>) }
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
