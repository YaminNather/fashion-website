import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import React, { useEffect } from "react";
import styles from "../../../styles/components/home/main_carousel/main_carousel.module.scss";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Carousel from "../../carousel/carousel";

const MainCarousel: React.FC = (props) => {
  const [emblaRef, embla] = useEmblaCarousel({loop: true});
  const [buttonOpacity, setButtonOpacity] = React.useState<0.0 | 1.0>(0.0);

  const scrollToPrevious = React.useCallback(
    () => {
      if(embla == undefined)
        return;
      
      embla.scrollPrev();
    },
    [embla]
  );
  
  const scrollToNext = React.useCallback(
    () => {
      if(embla == undefined)
        return;
      
      embla.scrollNext();
    },
    [embla]
  );  

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
        <img src="https://cdn.shopify.com/s/files/1/0041/9525/4381/files/main-banner-1_1728x.jpg?v=1560400995" />

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