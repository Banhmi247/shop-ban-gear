import Image from "next/image";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
    {/* Phần trên cùng: Navigation, Social & Subscription */}
    <div className={styles.footerTop}>
      <div className={styles.linksSection}>
        <nav className={styles.footerLinks}>
          <a href="#">ABOUT ROG</a>
          <a href="#">HOME</a>
          <a href="#">NEWSROOM</a>
          <a href="#">ACCESSIBILITY HELP</a>
        </nav>

        <div className={styles.socialSection}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-discord"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-twitch"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
        </div>

        <div className={styles.subscribeSection}>
          <input type="email" placeholder="Enter email address" />
          <button>SIGN UP</button>
        </div>
      </div>
    </div>

    {/* Logo trung tâm */}
    <div className={styles.footerLogoSection}>
      <Image
        src="/image/logo.png" alt="Logo" width={250} height={250}
        className={styles.footerLogo}
      />
    </div>

    {/* Phần dưới cùng: Ngôn ngữ, Policy Links & Bản quyền */}
    <div className={styles.footerBottom}>
      <div className={styles.languageSection}>
        <i className="fas fa-globe"></i> Global/English
      </div>
      <div className={styles.policyLinks}>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">TERMS OF USE NOTICE</a>
        <a href="#">COOKIE SETTINGS</a>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2025 Thientugears COMPUTER INC. ALL RIGHTS RESERVED.</p>
        <p>*Contact information</p>
        <p>*Gmail:buiduythientu6688@gmail.com</p>
        <p>*Phone number:0899027768</p>
      </div>
    </div>
  </footer>
    );
}