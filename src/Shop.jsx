function Shop() {
  return (

<main>
      <div className={styles.firstSection}>
        <div className={styles.sectionText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            maxime voluptas quae quod. Ratione ducimus possimus error eum quo
            sit sequi neque recusandae, quia optio quas at tenetur corporis
            mollitia!
          </p>
        </div>
        <div className={styles.sectionImageWrapper}>
          <img
            src={`${import.meta.env.BASE_URL}home/shoes.jpg`}
            alt="Awesome Backpack"
          />
        </div>
      </div>
    </main>

  );
}

export default Shop;
