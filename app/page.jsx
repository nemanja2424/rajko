import Header from "./components/header";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUser, faCarSide, faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import UserIcon from "./components/icons/user";

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <video
          src="/assetss/HeroVideo2.mp4" // putanja u odnosu na folder public
          autoPlay                   // automatski startuje
          loop                       // petlja
          muted                      // bez zvuka (preporučeno za autoplay)
          playsInline                // za mobilne uređaje
          className="hero-video"     // opcionalno za CSS
        />
        <div className={styles.content}>
          <h1>
            <span className={styles.gold}>Luxury</span> That <br />
            <span className={styles.gold}>Feels</span> Personal
          </h1>
          <p>
            Professional chauffeur service that turns every trip <br /> into a smooth, safe, and memorable experience.
          </p>
          <a href="#footer" className={`${styles.button1} ${styles.forPC}`}>
            Book now
          </a>
        </div>
        <div className={styles.scrollIcon}>
          <div></div>
        </div>
      </div>

      <div className={styles.whyUs}>
        <h1>
          Why Choose Us?
        </h1>
        <p>
          As a proud family-owned company, we’ve built our reputation on warmth, reliability, and an unwavering commitment to providing a truly personal luxury travel experience.
        </p>

        <div className={styles.kartice}>
          <div className={styles.kartica}>
            <div className={styles.okvirIkone}>
              <FontAwesomeIcon
                icon={faUser}
                className={styles.goldIcon}
              />
            </div>
            <h3>Experienced Chauffeurs</h3>
            <p>Our professional drivers combine years of experience with genuine care, ensuring every journey is safe, smooth, and enjoyable.</p>
          </div>
          <div className={styles.kartica}>
            <div className={styles.okvirIkone}>
              <FontAwesomeIcon
                icon={faCarSide}
                className={styles.goldIcon}
              />
            </div>
            <h3>Premium Fleet</h3>
            <p>Our vehicles are carefully maintained and equipped with modern amenities — blending comfort, elegance, and performance.</p>
          </div>
          <div className={styles.kartica}>
            <div className={styles.okvirIkone}>
              <FontAwesomeIcon
                icon={faBoltLightning}
                className={styles.goldIcon}
              />
            </div>
            <h3>Seamless Experience</h3>
            <p>From booking to drop-off, we handle every detail with precision and care — so you can simply relax and enjoy the ride.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
