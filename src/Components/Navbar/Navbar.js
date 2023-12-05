import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { FaHome, FaList } from "react-icons/fa";

import devTest from "../../assets/logo-dev-test.png";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <li className={styles.navTitle}>
          <Link to="/">
            <img src={devTest} alt="Logo" className={styles.logoImg} />
            <h2>DevTest</h2>
          </Link>
        </li>
        <li className={styles.navList}>
          <NavLink to="/">
            Home <FaHome />
          </NavLink>

          <NavLink to="/About">
            About <FaList />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
