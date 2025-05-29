import Image from "next/image";
import styles from "./page.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { GearSection } from "./components/gearsection/gearsection";
import { RecentStories } from "./components/recentstories/recentstories";
import { HandCarry } from "./components/handcarry/handcarry";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>``
      <section className={styles.banner}>
        <Image
          src="/image/banner2.jpg"
          alt="ROG Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.bannerText}>
        </div>
      </section>
      <GearSection/>
      <RecentStories/>
      <HandCarry/>
            {/* Banner */}
            <section className={styles.banner}>
        <Image
          src="/image/banner2.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.bannerText}>
        </div>
      </section>
    <Footer/>
    </div>
  );
}
