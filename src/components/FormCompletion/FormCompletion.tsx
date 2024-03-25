import classNames from "classnames";

import { Button } from "..";

import styles from "./FormCompletion.module.css";

const FormCompletion = () => {
  return (
    <div className={classNames(styles.completion_container)}>
      <img
        src="https://images.typeform.com/images/2dpnUBBkz2VN/image/default"
        alt=""
      />

      <h2 className={classNames(styles.completion_heading)}>
        Thanks for completing this typeform
      </h2>

      <h2 className={classNames(styles.completion_heading)}>
        Now <strong>create your own</strong> — it's free, easy, & beautiful
      </h2>

      {/* <a href="https://www.typeform.com/explore/?utm_campaign=LPJCKLsE&utm_source=typeform.com-16209320-business&utm_medium=typeform&utm_content=typeform-thankyoubutton&utm_term=EN"> */}
      <Button label="Create a typeform" />
      {/* </a> */}
    </div>
  );
};

export default FormCompletion;
