import {React,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./catalogue.module.css";

const AddVoucher = () => {
  const navigate = useNavigate();
      const [formData, setFormData] = useState({
        "amount": ""
        });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("https://nailsavvy.vercel.app/vouchers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
               Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `
            },
            body: JSON.stringify(formData),
            
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log("Success:", result);
            return navigate("/catalogue/voucher");
          } else {
            console.error("Error:", response.statusText);
            alert("Failed to submit form.");
          }
        } catch (error) {
          console.error("Request failed:", error);
          alert("Network error, please try again.");
        }
      };
  return (
    <div className={styles.addVoucher}>
      <div className={styles.addVoucherHeader}>
        <div className={styles.backButton} onClick={() => navigate(-1)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1329_46041)">
              <path
                d="M20.25 12H3.75"
                stroke="#FF6C78"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 5.25L3.75 12L10.5 18.75"
                stroke="#FF6C78"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1329_46041">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h1>Add Voucher</h1>
      </div>
      <form className={styles.voucherForms} onSubmit={handleSubmit}>
        <div className={styles.actions}>
          <div onClick={() => navigate(-1)}>Cancel</div>
          <button type="submit">Save</button>
        </div>

        <div className={styles.voucherBasicDetails}>
          <h1>Basic Details</h1>
          <div>
            <label>Voucher Name</label>
            <input type="text" placeholder="Input voucher name" />
          </div>
          <div>
            <label>Voucher Code</label>
            <input type="text" placeholder="Input voucher code" />
            <p>Generate code automatically</p>
          </div>
          <div>
            <label>Voucher Description</label>
            <input type="text" placeholder="Write here....." />
          </div>
        </div>
        <div className={styles.voucherPrice}>
          <h1>Pricing</h1>
          <div>
            <label>Price</label>
            <select name="amount" id="" onChange={handleChange} value={formData.amount} required>
              <option value="" disabled selected>
                Select price value
              </option>
              <option value="25000">₦25,000.00</option>
              <option value="30000">₦30,000.00</option>
              <option value="50000">₦50,000.00</option>
            </select>
          </div>
        </div>
        <div className={styles.voucherConditions}>
            <h1>Voucher Conditions</h1>
          <div>
            <label>Usage (Services and Products)</label>
            <select name="" id="">
              <option value="" disabled selected>
                {" "}
                Select price value{" "}
              </option>
              <option value="">All Services</option>
              <option value="">All products</option>
              <option value="">All Services and Products</option>
            </select>
          </div>
          <div>
            <div>
              <label>Usage Limit</label>
              <select name="" id="">
                <option value="" disabled selected>
                  Set usage limit{" "}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="Unlimited">Unlimited</option>
              </select>
            </div>
            <div>
              <label>Usage Per User</label>
              <select name="" id="">
                <option value="" disabled selected>
                Set usage Per User
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.voucherValidity}>
          <h1>Voucher Validity</h1>
          <div>
            <div>
                <label >Start Date</label>
                <input type="date" name="" id="" placeholder="Set start date"/>
            </div>
            <div>
                <label >End Date </label>
                <input type="date" name="" id="" placeholder="Set end date" />
            </div>
            </div>
            </div>
                      
      </form>
    </div>
  );
};

export default AddVoucher;
