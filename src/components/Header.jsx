import styles from "../modules/Header.module.scss";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <img src={logo} />
      </div>
      <nav className={styles["nav"]}>
        <a href="/" className={styles["link"]}>
          Features
        </a>
        <a href="/" className={styles["link"]}>
          Pricing
        </a>
        <a href="/" className={styles["link"]}>
          Resources
        </a>
      </nav>
      <div className={styles["auth"]}>
        <a href="/" className={styles["login"]}>
          Login
        </a>
        <a href="/" className={styles["signup"]}>
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
