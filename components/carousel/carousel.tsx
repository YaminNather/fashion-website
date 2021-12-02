import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import styles from "../../styles/components/carousel/carousel.module.scss";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselProps {
  className?: string;
  style?: React.CSSProperties;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const [buttonOpacity, setButtonOpacity] = React.useState<0.0 | 1.0>(0.0);

  function render(): JSX.Element {  
    return (
      <div className={props.className} style={props.style}>
        <Swiper slidesPerView={props.slidesPerView ?? 1} loop={props.loop ?? true} spaceBetween={props.spaceBetween ?? 0} freeMode={true}>
          {getSlides()}
        </Swiper>
      </div>
    );

    // return (
    //   <div className={classNames(styles.carousel, props.className)} onMouseEnter={(e) => setButtonOpacity(1.0)} onMouseLeave={(e) => setButtonOpacity(0.0)}>
    //     <div ref={emblaRef} className={classNames("embla")}>
    //       <div className="embla__container">
    //         {getSlides()}
    //       </div>
    //     </div>
        
    //     <button onClick={scrollToPrevious} className={classNames(styles.scroll_button, styles.left_button)} style={{opacity: buttonOpacity}}>
    //       <ArrowLeftOutlined />
    //     </button>
        
    //     <button onClick={scrollToNext} className={classNames(styles.scroll_button, styles.right_button)} style={{opacity: buttonOpacity}}>
    //       <ArrowRightOutlined />
    //     </button>
    //   </div>
    // );
  }

  function getSlides(): JSX.Element[] {
    const r: JSX.Element[] = [];

    React.Children.forEach(
      props.children,
      (child) => r.push(<SwiperSlide>{child}</SwiperSlide>)    
    );

    return r;
  }

  return render();
};

export default Carousel;