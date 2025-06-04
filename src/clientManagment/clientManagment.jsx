import React from "react";
import { useState } from "react";
import { useNavigate,Outlet, NavLink } from "react-router-dom";
import styles from "./clientManagment.module.css";

function ClientManagment() {
  return (
    <section className={styles.clientManagment}>
      <h1>Client Management</h1>
      <ul className={styles.navbarContainer}>
       <NavLink to='/clientmanagment' end><li> Client List</li></NavLink> 
       <NavLink to="/clientmanagment/reviews"> <li>Reviews</li></NavLink>
      </ul>
      <Outlet/>

     
    </section>
  );
}

export default ClientManagment;
