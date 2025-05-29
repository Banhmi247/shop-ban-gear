// components/handcarry.js
import Image from "next/image";
import Link from "next/link";
import styles from "./handcarry.module.css";

export function HandCarry() {
  return (
    <section id="handcarry" className={styles.products}>
      <h2>Mousepads</h2>
      <div className={styles.productGrid}>
        <div className={styles.productCard}>
          <Link href="/rog-ally-x">
            <Image src="/image/SP-004.webp" alt="SP-004" width={400} height={400} />
            <h3>SP-004</h3>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href="/rog-zephyrus-g16">
            <Image src="/image/rog-zephyrus.png" alt="ROG Zephyrus G16" width={400} height={400} />
            <h3>ROG Zephyrus G16</h3>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href="/rog-strix-scar-18">
            <Image src="/image/rog-strix.png" alt="ROG Strix Scar 18" width={400} height={400} />
            <h3>ROG Strix Scar 18</h3>
          </Link>
        </div>
        <div className={styles.productCard}>
          <Link href="/rog-flow-z13">
            <Image src="/image/rog-flow.png" alt="ROG Flow Z13" width={400} height={400} />
            <h3>ROG Flow Z13</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}