import { useState,React } from "react";
import styles from "./catalogue.module.css";
import { useNavigate} from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
 
    const [formData, setFormData] = useState({
        "title": "",
        "description":"",
        "image":"",
        "stock": "",
        "brand": "",
        "price": ""
      });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("https://nailsavvy.vercel.app/products", {
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
    <div className={styles.addProduct}>
      <div className={styles.addProductHeader}>
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
        <h1>Add Product</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.actions}>
          <div onClick={() => navigate(-1)}>Cancel</div>
          <button type="submit">Save</button>
        </div>
        <div>
          <div className={styles.productPhotos}>
            <div>
              <h2>Product Photos</h2>
              <p>Drag and drop or click to upload a photo</p>
            </div>

            <div className={styles.productPhotosContainer}>
              <div className={styles.productPhoto}>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1329_46201)">
                    <path
                      d="M28 22.75V36.75"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 29.75H35"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 14L20.4816 9.52875C20.6413 9.28933 20.8576 9.09301 21.1114 8.95717C21.3651 8.82133 21.6484 8.75017 21.9362 8.75H34.0638C34.3516 8.75017 34.6349 8.82133 34.8886 8.95717C35.1424 9.09301 35.3587 9.28933 35.5184 9.52875L38.5 14H45.5C46.4283 14 47.3185 14.3687 47.9749 15.0251C48.6313 15.6815 49 16.5717 49 17.5V42C49 42.9283 48.6313 43.8185 47.9749 44.4749C47.3185 45.1313 46.4283 45.5 45.5 45.5H10.5C9.57174 45.5 8.6815 45.1313 8.02513 44.4749C7.36875 43.8185 7 42.9283 7 42V17.5C7 16.5717 7.36875 15.6815 8.02513 15.0251C8.6815 14.3687 9.57174 14 10.5 14H17.5Z"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1329_46201">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Click to upload a photo or Drag and drop</p>
              </div>
              <div  className={styles.productPhoto}>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1329_46201)">
                    <path
                      d="M28 22.75V36.75"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 29.75H35"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 14L20.4816 9.52875C20.6413 9.28933 20.8576 9.09301 21.1114 8.95717C21.3651 8.82133 21.6484 8.75017 21.9362 8.75H34.0638C34.3516 8.75017 34.6349 8.82133 34.8886 8.95717C35.1424 9.09301 35.3587 9.28933 35.5184 9.52875L38.5 14H45.5C46.4283 14 47.3185 14.3687 47.9749 15.0251C48.6313 15.6815 49 16.5717 49 17.5V42C49 42.9283 48.6313 43.8185 47.9749 44.4749C47.3185 45.1313 46.4283 45.5 45.5 45.5H10.5C9.57174 45.5 8.6815 45.1313 8.02513 44.4749C7.36875 43.8185 7 42.9283 7 42V17.5C7 16.5717 7.36875 15.6815 8.02513 15.0251C8.6815 14.3687 9.57174 14 10.5 14H17.5Z"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1329_46201">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Click to upload a photo or Drag and drop</p>
              </div>
              <div  className={styles.productPhoto}>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1329_46201)">
                    <path
                      d="M28 22.75V36.75"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 29.75H35"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 14L20.4816 9.52875C20.6413 9.28933 20.8576 9.09301 21.1114 8.95717C21.3651 8.82133 21.6484 8.75017 21.9362 8.75H34.0638C34.3516 8.75017 34.6349 8.82133 34.8886 8.95717C35.1424 9.09301 35.3587 9.28933 35.5184 9.52875L38.5 14H45.5C46.4283 14 47.3185 14.3687 47.9749 15.0251C48.6313 15.6815 49 16.5717 49 17.5V42C49 42.9283 48.6313 43.8185 47.9749 44.4749C47.3185 45.1313 46.4283 45.5 45.5 45.5H10.5C9.57174 45.5 8.6815 45.1313 8.02513 44.4749C7.36875 43.8185 7 42.9283 7 42V17.5C7 16.5717 7.36875 15.6815 8.02513 15.0251C8.6815 14.3687 9.57174 14 10.5 14H17.5Z"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1329_46201">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Click to upload a photo or Drag and drop</p>

              </div>
              <div  className={styles.productPhoto}>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1329_46201)">
                    <path
                      d="M28 22.75V36.75"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 29.75H35"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 14L20.4816 9.52875C20.6413 9.28933 20.8576 9.09301 21.1114 8.95717C21.3651 8.82133 21.6484 8.75017 21.9362 8.75H34.0638C34.3516 8.75017 34.6349 8.82133 34.8886 8.95717C35.1424 9.09301 35.3587 9.28933 35.5184 9.52875L38.5 14H45.5C46.4283 14 47.3185 14.3687 47.9749 15.0251C48.6313 15.6815 49 16.5717 49 17.5V42C49 42.9283 48.6313 43.8185 47.9749 44.4749C47.3185 45.1313 46.4283 45.5 45.5 45.5H10.5C9.57174 45.5 8.6815 45.1313 8.02513 44.4749C7.36875 43.8185 7 42.9283 7 42V17.5C7 16.5717 7.36875 15.6815 8.02513 15.0251C8.6815 14.3687 9.57174 14 10.5 14H17.5Z"
                      stroke="#FF6C78"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1329_46201">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Click to upload a photo or Drag and drop</p>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.productBasicDetails}>

            <h2>Basic Details</h2>
            <div className={styles.formGroup}>
                <label>Product Name:</label>
                <input type="text" value={formData.title} onChange={handleChange} name="title"/>
                </div>
            <div className={styles.formGroup}>
                <label>Product Brand:</label>
                <input type="text" placeholder="Input product brand" value={formData.brand} onChange={handleChange} name="brand"/>
            </div>
            <div className={styles.formGroup}>
                <label>Short Description:</label>
                <input type="text" placeholder="Write here..." />
            </div>
            <div className={styles.productDesc}>
                <label>Product Description (Optional):</label>
               <input type="text" value={formData.description} onChange={handleChange} name="description"/>
            </div>

        </div>
        <div className={styles.productPrice}>
            <h2>Pricing</h2>
            <label>Price:</label>
            <input type="text" placeholder="input price"  value={formData.price} onChange={handleChange} name="price"/>
        </div>
        <div className={styles.inventory}>
            <h2>Inventory</h2>
            <div>
                <label>SKU (Store Keeping Unit)</label>
                <input type="text" placeholder="input sku"/>
                <p>Generate SKU automatically</p>
            </div>
            <div>
            <div>
                <label>Quantity:</label>
                <input type="number" placeholder="Input current quantity"  value={formData.stock} onChange={handleChange} name="stock"/>
            </div>
            <div>

                <label>Low Stock Level</label>
                <input type="number" placeholder="Set low stock level" />
      
            </div>
            </div>

        </div>
      </form>
    </div>
  );
}

export default AddProduct;
