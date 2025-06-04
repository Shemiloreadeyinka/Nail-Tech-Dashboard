import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import styles from "./catalogue.module.css";
import { motion } from "framer-motion";

function Catalogue() {
  const [Dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!Dropdown);
  };
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1.5}}>
      <Outlet />
    </motion.div>
  );
}

export default Catalogue;
 