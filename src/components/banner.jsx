import styles from "../styles/Banner.module.css";
import { useState, useEffect } from "react";

export default function Banner() {
  const [imageIndex, setImageIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const images = ["shoes.jpg", "nike banner.jpeg", "Nike.jpeg"];

  function incrementIndex() {
    setPrevIndex(imageIndex);
    if (imageIndex >= images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function decrementIndex() {
    setPrevIndex(imageIndex);
    if (imageIndex <= 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  useEffect(() => {
    if (prevIndex !== null) {
      const timer = setTimeout(() => {
        setPrevIndex(null);
      }, 400); // Entspricht den 0.4s aus deinem CSS

      return () => clearTimeout(timer);
    }
  }, [imageIndex]);

  return (
    <section className={styles.banner}>
      <div className={styles.imageContainer}>
        {prevIndex !== null && (
          <img
            key={`prev-${prevIndex}`} // Key zwingt zur Neu-Animation
            src={`${import.meta.env.BASE_URL}banner/${images[prevIndex]}`}
            alt=""
            className={`${styles.bannerImage} ${styles.fadeOut}`}
          />
        )}

        <img
          key={`current-${imageIndex}`} // Key zwingt zur Neu-Animation
          src={`${import.meta.env.BASE_URL}banner/${images[imageIndex]}`}
          alt="Produkt Highlight"
          className={`${styles.bannerImage} ${styles.fadeIn}`}
        />
      </div>

      <button
        onClick={decrementIndex}
        className={styles.bannerButton + " " + styles.bannerButtonPosLeft}
      >
        &lt;
      </button>
      <button
        onClick={incrementIndex}
        className={styles.bannerButton + " " + styles.bannerButtonPosRight}
      >
        &gt;
      </button>
    </section>
  );
}
