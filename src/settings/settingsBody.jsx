import React from "react";
import styles from "./settings.module.css";
import {  BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

function Settings() {
  return (
    <section className={styles.settingsBody}>
      <div className={styles.settingsBodyHeader}>
        <h1>Settings</h1>
        <ul className={styles.settingsBodyMenu}>
         <NavLink  to="/profile"   end> <li>Profile</li></NavLink>
         <NavLink  to="/profile/settings"  > <li>Settings</li></NavLink>
        </ul>
        <div>Edit Profile</div>
      </div>
        <Outlet/>
    </section>
  );
}

export default Settings;
