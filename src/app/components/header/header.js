import Image from "next/image";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/image/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#gear">Gear</a></li>
          <li><a href="#recent-stories">Recent Stories</a></li>
          <li><a href="#handcarry">Handbook Products</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
    </header>
  );
}
