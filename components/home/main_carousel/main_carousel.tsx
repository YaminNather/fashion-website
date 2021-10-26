import classNames from "classnames";
import React from "react";
import styles from "../../../styles/components/home/main_carousel/main_carousel.module.scss";
import Carousel from "../../carousel/carousel";
import Image from "next/image";

const MainCarousel: React.FC = (props) => {
  const render = () => {
    return (
      <Carousel className={classNames(styles.main_carousel)}>
        {buildSlide()}
        
        {buildSlide()}
      </Carousel>
    );    
  };

  function buildSlide(): JSX.Element {
    return (
      <div className={classNames(styles.slide)}>
        <Image src="https://cdn.shopify.com/s/files/1/0041/9525/4381/files/main-banner-1_1728x.jpg?v=1560400995" layout="fill" />

        <div className={classNames("container", styles.text_area)}>
          <span>
            Starting at <span className={classNames(styles.pricing)}>$20</span>
          </span>
          
          {/* <Typography color="black" fontSize="64px" fontWeight="100" className={classNames(styles.heading)}>Biggest Sale of the Year</Typography> */}
          <span className={classNames(styles.heading)}>Biggest Sale Of The Year</span>

          <button>Order Now</button>
        </div>
      </div>
    );
  }

  return render();
};

export default MainCarousel;