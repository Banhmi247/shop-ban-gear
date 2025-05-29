import Image from "next/image";
import styles from "./recentstories.module.css";

export function RecentStories() {
    return (
        <section id="recent-stories" className={styles.recentStories}>
        <h2 className={styles.sectionTitle}>RECENT STORIES</h2>
        <div className={styles.storiesGrid}>
          {/* Card 1 */}
          <div className={styles.storyCard}>
            <Image
              src="/image/story1.png"
              alt="ROG Swift PG27AQN"
              width={300}
              height={250}
            />
            <h3>ROG Swift PG27AQN</h3>
            <p>The full ROG arena experience with a 360Hz refresh rate.</p>
          </div>
          {/* Card 2 */}
          <div className={styles.storyCard}>
            <Image
              src="/image/story2.jpg"
              alt="Upgrade GPU in gaming laptop?"
              width={300}
              height={250}
            />
            <h3>Can I upgrade the GPU in my gaming laptop?</h3>
            <p>Everything you need to know about laptop GPU upgrades.</p>
          </div>
          {/* Card 3 */}
          <div className={styles.storyCard}>
            <Image
              src="/image/story3.png"
              alt="ROG Strix GeForce RTX 4090"
              width={300}
              height={250}
            />
            <h3>New ROG Strix GeForce RTX 4090</h3>
            <p>Unleash top-tier gaming performance with advanced cooling.</p>
          </div>
          {/* Card 4 */}
          <div className={styles.storyCard}>
            <Image
              src="/image/story4.png"
              alt="ROG Strix X670E"
              width={300}
              height={250}
            />
            <h3>ROG Strix X670E</h3>
            <p>Next-gen motherboards for high-end Ryzen gaming builds.</p>
          </div>
        </div>
        <div className={styles.learnMore}>
          <a href="#">LEARN MORE &gt;</a>
        </div>
      </section>

    );
}