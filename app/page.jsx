import Header from "./components/header";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div>
      <Header />
      
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <video 
          src="/assetss/HeroVideo2.mp4"  // putanja u odnosu na folder public
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
          <a href='#footer' className={`${styles.button1} ${styles.forPC}`}>Book now</a>
        </div>
        <div className={styles.scrollIcon}><div></div></div>
      </div>


    </div>
  );
}
