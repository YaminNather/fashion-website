import classNames from "classnames";
import React from "react";
import styles from "./banner.module.scss";

const Banner: React.FC = (props) => {
  function render(): JSX.Element {
    return (
      <div className={classNames(styles.banner)}>
        <h5>OUR COLLECTION</h5>
      </div>
    );
  }

  return render();
};

export default Banner;