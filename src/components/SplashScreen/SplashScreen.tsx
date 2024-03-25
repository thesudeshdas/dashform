import classNames from "classnames";

import styles from "./SplashScreen.module.css";
import useFormContext from "../../contexts/FormContext/formContext.hook";
import { useEffect } from "react";

const SplashScreen = () => {
  const { formDispatch } = useFormContext();

  useEffect(() => {
    setTimeout(() => {
      formDispatch({ type: "LOAD_FORM" });
    }, 1000);
  }, [formDispatch]);

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
