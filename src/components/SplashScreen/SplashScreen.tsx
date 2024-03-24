import classNames from "classnames";

import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div className={classNames(styles.splash_screen)}>
      <img
        src="/growthX-logo.png"
        alt="GrowthX"
        className={styles.splash_brand_logo}
      />

      <div className={classNames(styles.splash_progress_container)}>
        <div className={classNames(styles.splash_progress_runner)}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
