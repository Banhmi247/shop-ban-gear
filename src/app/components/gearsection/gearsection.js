// components/gearsection.js
import Image from "next/image";
import Link from "next/link";
import styles from "./gearsection.module.css";

export function GearSection() {
  return (
    <section id="gear" className={styles.products}>
      <h2>Gear</h2>
      <div className={styles.productGrid}>
        <div className={styles.productCard}>
          <Link href="/ninjutso-sora-v2">
            <Image
              src="/image/ninjutso_sora_v2_white_1.png"
              alt="Ninjutso Sora v2"
              width={400}
              height={400}
            />
            <h3>Ninjutso Sora v2</h3>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href="/woothing-60he">
            <Image src="/image/woothing60he.png" alt="Woothing 60he" width={400} height={400} />
            <h3>Woothing 60he</h3>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href="/hyperx-stinger-core-ii">
            <Image
              src="/image/hyperx stinger.webp"
              alt="HyperX Stinger Core II"
              width={400}
              height={400}
            />
            <h3>HyperX Stinger Core II</h3>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href="/hyperx-quadcast-s">
            <Image
              src="/image/mic hyperx.png"
              alt="HyperX Quadcast S"
              width={400}
              height={400}
            />
            <h3>HyperX Quadcast S</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}