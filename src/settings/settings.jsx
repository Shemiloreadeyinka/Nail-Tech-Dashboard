import React from "react";
import styles from "./settings.module.css";

function Settings() {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.emailNotif}>
        <div>
          <h1>Email Notification</h1>
          <p>
            Receive email alerts for all Bookings, Product Inventory and System
            Updates
          </p>
        </div>
        <div>Enable email notification alert</div>
      </div>
      <div className={styles.desktopNotif}>
        <div>
          <h1>Desktop Notification </h1>
          <p>
            Receive email alerts for all Bookings, Product Inventory and System
            Updates
          </p>
        </div>
        <div>Enable email notification alert</div>
      </div>
      
      <div className={styles.deactivateAcc}>
        <div>
          <h1> Deactivate Account </h1>
          <p>
          The account will no longer be available, and all data in the account will be permanently deleted.
          </p>
        </div>
        <div>Deactivate Account</div>
      </div>
      
    </div>
  );
}

export default Settings;
