import { React, useState, useEffect } from "react";
import styles from "./staffmanagment.module.css";
import { NavLink,useNavigate } from "react-router-dom";

function AddStaff() {
  const navigate = useNavigate();
  
      const [formData, setFormData] = useState({
"profilePhoto": "sssssdddddddss.jpg",
  "firstName": "",
  "lastName": "",
  "email": "",
  "phoneNumber": "",
  "homeAddress": "",
  "dateOfBirth": "",
  "jobTitle": "",
  "departmentId": '',
  "staffId": "",
  "startDate": "",
  "endDate": "",
  "nextOfKinName": " ",
  "nextOfKinAddress": "  ",
  "nextOfKinPhoneNumber": "",
  "permissionLevelId": ""
        });
    console.log(formData)
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("https://nailsavvy.vercel.app/staff", {
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
            alert("Form submitted successfully!");
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
    <div className={styles.AddStaff}>
      <div className={styles.AddStaffHeader}>
        <NavLink to="/staffmanagment">
          {" "}
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1380_9413)">
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
                <clipPath id="clip0_1380_9413">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </NavLink>
        <h2>Add Staff</h2>
      </div>
      <form onSubmit={handleSubmit}>
      <div className={styles.saveStaff}>
        <div onClick={() => navigate(-1)}>Cancel</div>
        <button type="submit">Save</button>
      </div>
      <div className={styles.addStaffBody}>
        <div className={styles.profilePhoto}>
          <h1>Profile Photo</h1>
          <h2>Click to upload photo</h2>
          <div >
            <svg 
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="95"
                height="95"
                rx="47.5"
                fill="#FFF5F6"
              />
              <rect
                x="0.5"
                y="0.5"
                width="95"
                height="95"
                rx="47.5"
                stroke="#E4E4E7"
              />
              <path
                d="M64 66V62C64 59.8783 63.1571 57.8434 61.6569 56.3432C60.1566 54.8429 58.1217 54 56 54H40C37.8783 54 35.8434 54.8429 34.3431 56.3432C32.8429 57.8434 32 59.8783 32 62V66M56 38C56 42.4183 52.4183 46 48 46C43.5817 46 40 42.4183 40 38C40 33.5817 43.5817 30 48 30C52.4183 30 56 33.5817 56 38Z"
                stroke="#FF6C78"
                stroke-width="2.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="64.5"
                y="72.5"
                width="23"
                height="23"
                rx="11.5"
                fill="#FFF5F6"
              />
              <rect
                x="64.5"
                y="72.5"
                width="23"
                height="23"
                rx="11.5"
                stroke="#E4E4E7"
              />
              <g clip-path="url(#clip0_1380_9853)">
                <path
                  d="M75.5 80.0001H72C71.7348 80.0001 71.4804 80.1055 71.2929 80.293C71.1054 80.4805 71 80.7349 71 81.0001V88.0001C71 88.2653 71.1054 88.5197 71.2929 88.7072C71.4804 88.8948 71.7348 89.0001 72 89.0001H79C79.2652 89.0001 79.5196 88.8948 79.7071 88.7072C79.8946 88.5197 80 88.2653 80 88.0001V84.5001M79.25 79.2501C79.4489 79.0512 79.7187 78.9395 80 78.9395C80.2813 78.9395 80.5511 79.0512 80.75 79.2501C80.9489 79.449 81.0607 79.7188 81.0607 80.0001C81.0607 80.2814 80.9489 80.5512 80.75 80.7501L76 85.5001L74 86.0001L74.5 84.0001L79.25 79.2501Z"
                  stroke="#FF9DA5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1380_9853">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(70 78)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.basicDetails}> 
          <h1>Basic Details</h1>
          <div>
            <div className={styles.basicDetailsForm}>
              <div>
                <label>First Name:</label>
                <input type="text" placeholder="Input first name"  required name="firstName" value={formData.firstName} onChange={handleChange}/>
              </div>
              <div>
                <label>Last Name:</label>
                <input type="text" placeholder="Input last name"  required name="lastName" value={formData.lastName} onChange={handleChange}/>
              </div>
              <div>
                <label>Email:</label>
                <input type="email" placeholder="Input email"  required name="email" value={formData.email} onChange={handleChange}/>
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="tel" placeholder="Input phone number"  required name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div>
                <label>Home Address:</label>
                <input type="text" placeholder="Input home address" required name="homeAddress"  value={formData.homeAddress} onChange={handleChange}/>
              </div>
              <div>
                <label>Date Of Birth:</label>
                <input type="date" id=""  placeholder="select date" required name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.basicDetails}> 
          <h1>Work Details</h1>
          <div>
            <form className={styles.basicDetailsForm}>
              <div>
                <label>Job Title:</label>
                <input type="text" placeholder="Input Job title"   required name="jobTitle" value={formData.jobTitle} onChange={handleChange}/>
              </div>
              <div>
                <label>Department:</label>
                <select name="departmentId" id=""  required value={formData.departmentId} onChange={handleChange}>
                  <option disabled >Select Department</option>
                  <option value="1">Nail Polish and Treatment</option>
                  <option value="1">Pedicure and Manicure</option>
                  <option value="1">Spa</option>
                  <option value="1">Customer Service</option>
                  <option value="1">Administrator</option>
                </select>
              </div>
              <div>
                <label>Start Date:</label>
                <input type="date" placeholder="Select Date" name="startDate" value={formData.startDate} onChange={handleChange}/>
              </div>
              <div>
                <label>End Date:</label>
                <input type="date" placeholder="Select Date" name="endDate"  value={formData.endDate} onChange={handleChange}/>
              </div>
              <div>
                <label>Staff ID:</label>
                <input type="text" placeholder="Input home address" name="staffId" value={formData.staffId} onChange={handleChange}/>
              </div>

            </form>
          </div>
        </div>
        <div className={styles.basicDetails}> 
          <h1>Next of Kin Details</h1>
          <div>
            <form className={styles.basicDetailsForm}>
              <div>
                <label>Name of Next of Kin:</label>
                <input type="text" placeholder="Input name of next of kin" name="nextOfKinName" value={formData.nextOfKinName} onChange={handleChange}/>
              </div>
              <div>
                <label>Department:</label>
                <input type="text" placeholder="Input next of kin address" name="nextOfKinAddress" value={formData.nextOfKinAddress} onChange={handleChange}/>
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="text" placeholder="Input next of kin phone number" name="nextOfKinPhoneNumber" value={formData.nextOfKinPhoneNumber} onChange={handleChange}/>
              </div>
   
            </form>
          </div>
        </div>
        <div className={styles.basicDetails}> 
          <h1>Permission Level</h1>
          <h2>Choose the access level this staff has to the platform</h2>
          <div>
            <form className={styles.basicDetailsForm} >
              <div>
                <label>Permission:</label>
                <select name="permissionLevelId" id="" defaultValue='Select permission level' className={styles.permissionLvl} onChange={handleChange} value={ formData.permissionLevelId}>
                  <option value="" disabled>Select permission level</option>
                  <option value="">No Access</option>
                  <option value="2">Customer Service</option>
                  <option value="1">Admin</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default AddStaff;
