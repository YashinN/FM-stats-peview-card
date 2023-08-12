import styles from "./StatCard.module.css";

const StatsCard = () => {
  return (
    <div className={`${styles.stats_card} `}>
      <div className={`${styles.img_container}`}>
        <div className={`${styles.img_overlay}`}></div>
        <img
          className={`${styles.img_main}`}
          src="/images/image-header-desktop.jpg"
          alt="people working"
        />
      </div>

      <div className={`${styles.stats_content}`}>
        <div className={`${styles.stats_header}`}>
          <h1 className={styles.title}>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className={`${styles.description}`}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>

        <div className={`${styles.stats_container}`}>
          <div className={`${styles.stat}`}>
            <p className={`${styles.figure}`}>10k+</p>
            <p className={`${styles.stat_name}`}>COMPANIES</p>
          </div>

          <div className={`${styles.stat}`}>
            <p className={`${styles.figure}`}>314</p>
            <p className={`${styles.stat_name}`}>TEMPLATES</p>
          </div>

          <div className={`${styles.stat}`}>
            <p className={`${styles.figure}`}>12M+</p>
            <p className={`${styles.stat_name}`}>QUERIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
