import React from "react";
import styles from "./catalogue.module.css";
import { useNavigate } from "react-router-dom";
function AddService() {
  const navigate = useNavigate();
  
  return (
    <div className={styles.addService}>
      <div className={styles.addServiceHeader}>
        <div className={styles.backButton} onClick={() => navigate(-1)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1324_40999)">
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
              <clipPath id="clip0_1324_40999">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h1>Add Service</h1>
      </div>

      <form className={styles.addServiceForm}>
        <div className={styles.actions}>
          <div onClick={() => navigate(-1)}>Cancel</div>
          <button>Save</button>
        </div>
        <div className={styles.basicDetails}>
          <h1>Basic Details</h1>

          <div>
            <label>Service Name :</label>
            <input type="text" name="serviceName" />
          </div>
          <div>
            <div>
              {" "}
              <label>Select Package</label>
              <select name="" id="">
                <option value="">Single Package</option>
                <option value="">Combo Package</option>
              </select>
            </div>

            <div>
              {" "}
              <label>Select Category</label>
              <select name="" id="">
                <option value="">Pedicure</option>
                <option value="">Nail Polish and Treatment</option>
              </select>
            </div>
          </div>
          <div className={styles.serviceDesc}>
            <label>Service Description (Optional)</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className={styles.pricing}>
            <h2>Duration</h2>
            <div className={styles.pricingOptions}>
                <div>
                     <label>Duration (in minutes)</label>
                     <select name="" id="">
                     <option value="" disabled selected>Select an option</option>
                        <option value="1 Hour">1 Hour</option>
                        <option value="1 Hour 30 Minutes">1 Hour 30 Minutes</option>
                        <option value="2 Hour">2 Hour</option>
                     </select>
                </div>
                <div>
                     <label>Price</label>
                     <input type="text" value="₦"/>
                </div>
            </div>
        </div>
      </form>
    </div>
  );
}

export default AddService;
