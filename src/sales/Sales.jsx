import {React,useState,useEffect} from "react";
import styles from "./sales.module.css";
import OverviewDetails from "../overviewdetails/overviewDetails";
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
function Sales() {
  const apiToken = import.meta.env.VITE_API_TOKEN;
    const [TotalRevenue, setTotalRevenue] = useState(null);
    const [TotalServiceSales, setTotalServiceSales] = useState(null);
    const [TotalProduct, setTotalProductSales] = useState(null);
    const [TotalVoucherSales, setTotalVoucherSales] = useState(null);
    const headers = { Authorization: `Bearer ${apiToken} ` };
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
  return (
    <section className={styles.sales}>
      <h1>Sales</h1>
      <div className={styles.salesOverviewContainer}>
        <div className={styles.salesOverviewHeader}>
          <h1>Sales Overview</h1>
          <select name="" id="">
            <option value="">All time</option>
            <option value="">Last 7 Days</option>
            <option value="">This Month</option>
            <option value="">This Quater</option>
            <option value="">This Year</option>
          </select>
        </div>
        <div className={styles.salesOverviewContent}>
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
      <div className={styles.salesGraph}>
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
                    1000, 0, 1550, 550, 550, 550, 550, 550, 550, 550, 550, 550,
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
      <div className={styles.salesBreakdown}>
        <h1>Sales Breakdown</h1>
        <div className={styles.salesBreakdownContent}>
          <div className={styles.dailySales}>
            <div className={styles.dailySalesHeader}>
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66699 2.6665H4.987C6.427 2.6665 7.56033 3.9065 7.44033 5.33317L6.33366 18.6132C6.14699 20.7865 7.86698 22.6532 10.0537 22.6532H24.2537C26.1737 22.6532 27.8537 21.0798 28.0003 19.1732L28.7203 9.17318C28.8803 6.95984 27.2003 5.15983 24.9737 5.15983H7.76034M12.0003 10.6665H28.0003M23.3337 27.6665C23.3337 28.587 22.5875 29.3332 21.667 29.3332C20.7465 29.3332 20.0003 28.587 20.0003 27.6665C20.0003 26.746 20.7465 25.9998 21.667 25.9998C22.5875 25.9998 23.3337 26.746 23.3337 27.6665ZM12.667 27.6665C12.667 28.587 11.9208 29.3332 11.0003 29.3332C10.0799 29.3332 9.33366 28.587 9.33366 27.6665C9.33366 26.746 10.0799 25.9998 11.0003 25.9998C11.9208 25.9998 12.667 26.746 12.667 27.6665Z"
                    stroke="#7A5AF8"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Daily sales</p>
              </div>
              <div>
                <div className={styles.filterButton}>
                  Filter
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
                <div className={styles.exportButton}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6997 6.41683C15.6997 6.67516 16.9247 8.21683 16.9247 11.5918V11.7002C16.9247 15.4252 15.4331 16.9168 11.7081 16.9168H6.28307C2.55807 16.9168 1.06641 15.4252 1.06641 11.7002V11.5918C1.06641 8.24183 2.27474 6.70016 5.22474 6.42516M8.99974 11.5002V2.01683M11.7914 3.87516L8.99974 1.0835L6.20807 3.87516"
                      stroke="#18181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.contentContainer}>
      
              <table className={styles.salesContent}>
                <tr>
                  <th>Item type</th>
                  <th>Qty. Sold</th>
                  <th>Total (₦)</th>
                </tr>
                <tr>
                  <td>Voucher (25k)</td>
                  <td>5</td>
                  <td>150,000</td>
                </tr>
                <tr>
                  <td>Nail Gel</td>
                  <td>5</td>
                  <td>150,000</td>
                </tr>
                <tr>
                  <td>BIAB (Builder in a Bottle)</td>
                  <td>5</td>
                  <td>150,000</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.serviceSales}>
            <div className={styles.serviceSalesHeader}>
              <div>
                <svg
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66667 1.6665V5.6665M18.3333 1.6665V5.6665M1.66667 11.1198H24.3333M17.4933 28.3332C18.4267 29.1732 19.6533 29.6665 21 29.6665C22.9467 29.6665 24.64 28.6265 25.56 27.0798C26.0533 26.2798 26.3333 25.3332 26.3333 24.3332C26.3333 22.9865 25.8267 21.7598 25 20.8132M17.4933 28.3332C17.08 27.9865 16.72 27.5598 16.44 27.0798C15.9467 26.2798 15.6667 25.3332 15.6667 24.3332C15.6667 21.3865 18.0533 18.9998 21 18.9998C22.6 18.9998 24.0267 19.7065 25 20.8132M17.4933 28.3332H7.66667C3 28.3332 1 25.6665 1 21.6665V10.3332C1 6.33317 3 3.6665 7.66667 3.6665H18.3333C23 3.6665 25 6.33317 25 10.3332V20.8132M18.92 24.3332L20.24 25.6532L23.08 23.0265M12.994 17.2665H13.006M8.05908 17.2665H8.07106M8.05908 21.2665H8.07106"
                    stroke="#EE46BC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Service sales</p>
              </div>
              <div>
                <div className={styles.filterButton}>
                  Filter
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
                <div className={styles.exportButton}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6997 6.41683C15.6997 6.67516 16.9247 8.21683 16.9247 11.5918V11.7002C16.9247 15.4252 15.4331 16.9168 11.7081 16.9168H6.28307C2.55807 16.9168 1.06641 15.4252 1.06641 11.7002V11.5918C1.06641 8.24183 2.27474 6.70016 5.22474 6.42516M8.99974 11.5002V2.01683M11.7914 3.87516L8.99974 1.0835L6.20807 3.87516"
                      stroke="#18181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
            </div>
            <div className={styles.contentContainer}>
      
      <table className={styles.salesContent}>
        <tr>
          <th>Service</th>
          <th>Price</th>
          <th>times bookes</th>
          <th>Total (₦)</th>
        </tr>
        <tr>
          <td>Voucher (25k)</td>
          <td>₦ 25,000</td>
          <td>5</td>
          <td>150,000</td>
        </tr>
        <tr>
          <td>Nail Gel</td>
          <td>₦ 10,000</td>
          <td>5</td>
          <td>150,000</td>
        </tr>
        <tr>
          <td>BIAB (Builder in a Bottle)</td>
          <td>₦ 20,000</td>
          <td>5</td>
          <td>150,000</td>
        </tr>
      </table>
    </div>
          </div>
          <div className={styles.productSales}>
            <div className={styles.productSalesHeader}>
              <div>
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66699 1.6665H3.987C5.427 1.6665 6.56033 2.9065 6.44033 4.33317L5.33366 17.6132C5.14699 19.7865 6.86698 21.6532 9.05365 21.6532H23.2537C25.1737 21.6532 26.8537 20.0798 27.0003 18.1732L27.7203 8.17318C27.8803 5.95984 26.2003 4.15983 23.9737 4.15983H6.76034M11.0003 9.6665H27.0003M22.3337 26.6665C22.3337 27.587 21.5875 28.3332 20.667 28.3332C19.7465 28.3332 19.0003 27.587 19.0003 26.6665C19.0003 25.746 19.7465 24.9998 20.667 24.9998C21.5875 24.9998 22.3337 25.746 22.3337 26.6665ZM11.667 26.6665C11.667 27.587 10.9208 28.3332 10.0003 28.3332C9.07985 28.3332 8.33366 27.587 8.33366 26.6665C8.33366 25.746 9.07985 24.9998 10.0003 24.9998C10.9208 24.9998 11.667 25.746 11.667 26.6665Z"
                    stroke="#978266"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Product sales</p>
              </div>
              <div>
                <div className={styles.filterButton}>
                  Filter
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
                <div className={styles.exportButton}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6997 6.41683C15.6997 6.67516 16.9247 8.21683 16.9247 11.5918V11.7002C16.9247 15.4252 15.4331 16.9168 11.7081 16.9168H6.28307C2.55807 16.9168 1.06641 15.4252 1.06641 11.7002V11.5918C1.06641 8.24183 2.27474 6.70016 5.22474 6.42516M8.99974 11.5002V2.01683M11.7914 3.87516L8.99974 1.0835L6.20807 3.87516"
                      stroke="#18181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.contentContainer}>
      
      <table className={styles.salesContent}>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty. Sold</th>
          <th>Total (₦)</th>
        </tr>
        <tr>
          <td>Voucher (25k)</td>
          <td>₦ 25,000.00</td>
          <td>5</td>
          <td>150,000</td>
        </tr>
        <tr>
          <td>Nail Gel</td>
          <td>12,000</td>
          <td>5</td>
          <td>150,000</td>
        </tr>
        <tr>
          <td>BIAB (Builder in a Bottle)</td>
          <td>₦ 25,000.00</td>
          <td>5</td>
          <td>150,000</td>
        </tr>
      </table>
    </div>
          </div>
          <div className={styles.voucherSales}>
            <div className={styles.voucherSalesHeader}>
              <div>
                <svg
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66667 1.6665V5.6665M18.3333 1.6665V5.6665M1.66667 11.1198H24.3333M17.4933 28.3332C18.4267 29.1732 19.6533 29.6665 21 29.6665C22.9467 29.6665 24.64 28.6265 25.56 27.0798C26.0533 26.2798 26.3333 25.3332 26.3333 24.3332C26.3333 22.9865 25.8267 21.7598 25 20.8132M17.4933 28.3332C17.08 27.9865 16.72 27.5598 16.44 27.0798C15.9467 26.2798 15.6667 25.3332 15.6667 24.3332C15.6667 21.3865 18.0533 18.9998 21 18.9998C22.6 18.9998 24.0267 19.7065 25 20.8132M17.4933 28.3332H7.66667C3 28.3332 1 25.6665 1 21.6665V10.3332C1 6.33317 3 3.6665 7.66667 3.6665H18.3333C23 3.6665 25 6.33317 25 10.3332V20.8132M18.92 24.3332L20.24 25.6532L23.08 23.0265M12.994 17.2665H13.006M8.05908 17.2665H8.07106M8.05908 21.2665H8.07106"
                    stroke="#61616B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Voucher sales</p>
              </div>
              <div>
                <div className={styles.filterButton}>
                  Filter
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
                <div className={styles.exportButton}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6997 6.41683C15.6997 6.67516 16.9247 8.21683 16.9247 11.5918V11.7002C16.9247 15.4252 15.4331 16.9168 11.7081 16.9168H6.28307C2.55807 16.9168 1.06641 15.4252 1.06641 11.7002V11.5918C1.06641 8.24183 2.27474 6.70016 5.22474 6.42516M8.99974 11.5002V2.01683M11.7914 3.87516L8.99974 1.0835L6.20807 3.87516"
                      stroke="#18181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.contentContainer}>
      
      <table className={styles.salesContent}>
        <tr>
          <th>Service</th>
          <th>Price (₦)</th>
          <th>Times Booked</th>
          <th>Total (₦)</th>
        </tr>
        <tr>
          <td>Voucher (25k)</td>
          <td>3000</td>
          <td>10</td>
          <td>150,000</td>
        </tr>
        <tr>
          <td>Nail Gel</td>
          <td>50,000</td>
          <td>10</td>
          <td>150,000</td>
        </tr>
        <tr>
          <td>BIAB (Builder in a Bottle)</td>
          <td>5,000</td>
          <td>5</td>          
          <td>150,000</td>
        </tr>
      </table>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sales;
