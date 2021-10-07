import classNames from "classnames";
import React from "react";
import styles from "./side_area.module.scss";
import Link from "next/link";

const SideArea: React.FC = (props) => {
  function render(): JSX.Element {
    return (
      <div className={classNames(styles.side_area)}>
        <h6 className={classNames(styles.heading)}>
          Categories
        </h6>

        <div className={styles.filter_tags_area}>
          <Link href="/"><a><button className={styles.filter_tag}>Accessories</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Calendar</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Clothing</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Cotton</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Fashion</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Shoes</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Summer</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Trends</button></a></Link>
        </div>

        <h6 className={classNames(styles.heading)} style={{marginTop: "32px"}}>
          Filter Tags
        </h6>

        <div className={styles.filter_tags_area}>
          <Link href="/"><a><button className={styles.filter_tag}>Accessories</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Calendar</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Clothing</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Cotton</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Fashion</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Shoes</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Summer</button></a></Link>
          
          <Link href="/"><a><button className={styles.filter_tag}>Trends</button></a></Link>
        </div>
      </div>
    );
  }

  return render();
}


export default SideArea;