'use client'
import Header from "./components/header";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUser, faCarSide, faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import UserIcon from "./components/icons/user";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  return (
    <div className={styles.body}>
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
                className={`${styles.goldIcon} ${styles.faGradient}`}
              />
            </div>
            <h3 className={styles.gold2}>Experienced Chauffeurs</h3>
            <p>Our professional drivers combine years of experience with genuine care, ensuring every journey is safe, smooth, and enjoyable.</p>
          </div>
          <div className={styles.kartica}>
            <div className={styles.okvirIkone}>
              <FontAwesomeIcon
                icon={faCarSide}
                className={styles.goldIcon}
              />
            </div>
            <h3 className={styles.gold2}>Premium Fleet</h3>
            <p>Our vehicles are carefully maintained and equipped with modern amenities — blending comfort, elegance, and performance.</p>
          </div>
          <div className={styles.kartica}>
            <div className={styles.okvirIkone}>
              <FontAwesomeIcon
                icon={faBoltLightning}
                className={styles.goldIcon}
              />
            </div>
            <h3 className={styles.gold2}>Seamless Experience</h3>
            <p>From booking to drop-off, we handle every detail with precision and care — so you can simply relax and enjoy the ride.</p>
          </div>
        </div>

      </div>

      <div className={`${styles.whyUs} ${styles.area}`}>
        <h1>Your Journey Across the Tri-State Area Begins Here</h1>
        <div className={styles.slikaTekst}>
          <p>From the heart of New York City to the farthest corners of the Tri-State area and beyond, Transporter Chauffeurs LLC provides luxury chauffeur services across New York, New Jersey, and Connecticut. Covering all major metropolitan airports and surrounding regions, our professional chauffeurs ensure every journey is seamless, comfortable, and reliable — whether for business, leisure, or special events.</p>
          <Image
            src="/assetss/mapa.jpg"
            alt="Map showing the Tri-State area"
            width={900}
            height={500}
            className={styles.mapImage}
          />  
        </div>
        {/* Ide slika kada daka skine. 2 KOMBINACIJE: naslov iznad svega, naslov samo iznad teksta */}
      </div>

      <div className={styles.kartice2}>
        <div className={`${styles.kartica} ${styles.kartica2}`}>
          <h1>100%</h1>
          <p>Luxury Experience</p>
        </div>

        <div className={`${styles.kartica} ${styles.kartica2}`}>
          <h1>24/7</h1>
          <p>Service Available</p>
        </div>

        <div className={`${styles.kartica} ${styles.kartica2}`}>
          <h1>99%</h1>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      <div className={styles.whyUs}>
        <h1>Our Signature Vehicle</h1>
        <p>Step into sophistication with our Cadillac Escalade — where luxury meets power.
          Perfectly maintained and equipped with premium amenities, it offers the ideal blend of comfort, style, and safety.
          Whether it’s an airport transfer, a corporate event, or a night out in the city, our Escalade ensures your journey is as memorable as your destination.
        </p>

         <div className={styles.sliderContainer}>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={30}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className={styles.swiper}
          >
            <SwiperSlide>
              <Image
                src="/assetss/escalade.png"
                alt="Cadillac Escalade front view"
                width={1200}
                height={600}
                className={styles.slideImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assetss/escalade2.png"
                alt="Cadillac Escalade interior"
                width={1200}
                height={600}
                className={styles.slideImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assetss/escalade3.png"
                alt="Cadillac Escalade side view"
                width={1200}
                height={600}
                className={styles.slideImage}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  );
}
