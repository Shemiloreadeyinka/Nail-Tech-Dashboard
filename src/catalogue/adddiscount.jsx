import React from "react";
import {  useNavigate } from "react-router-dom";
import styles from "./catalogue.module.css";

const AddDiscount = () => {
  const navigate = useNavigate();
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
            <g clipPath="url(#clip0_1329_46041)">
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
        <h1>Add Discount</h1>
      </div>
      <form className={styles.voucherForms}>
        <div className={styles.actions}>
          <div onClick={() => navigate(-1)}>Cancel</div>
          <button>Save</button>
        </div>

        <div className={styles.voucherBasicDetails}>
          <h1>Basic Details</h1>
          <div >
            <label>Discount Name</label>
            <input type="text" placeholder="Input discount name" />
          </div>
          <div>
            <label>Discount Code</label>
            <input type="text" placeholder="Input discount code" />
          </div>
          <div>
            <label>Discount Description</label>
            <input type="text" placeholder="Write here....." />
          </div>
        </div>
        <div className={styles.voucherPrice}>
          <h1>Discount Value</h1>
          <div>
            <label>Discount Type</label>
            <div className={styles.discountType}>
             <div><input type="radio" name="discount type" id="" /><label> Percentage Discount</label> </div>   
             <div> <input type="radio" name="discount type" id="" /><label> Fixed Amount</label></div>   
            </div>

          </div>
          <div>
            <label>Discount Value</label>
            <input type="number" name="" id="" placeholder="Input discount value"/>
          </div>
        </div>
        <div className={styles.voucherConditions}>
            <h1>Discount Conditions</h1>
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
          <h1>Discount Validity</h1>
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

export default AddDiscount;
