import Typography from "@mui/material/Typography";
import classNames from "classnames";
import React from "react";
import styles from "../../../styles/components/home/reviews_section/reviews_section.module.scss";
import Carousel from "../../carousel/carousel";

const ReviewsSection: React.FC = (props) => {
  function render(): JSX.Element {
    return (
      <section id="reviews_section" className={classNames("container", styles.reviews_section)}>
        <div className={classNames(styles.main_content)}>
          <Typography variant="h2" className={classNames(styles.heading)}>Our Clients</Typography>

          <Carousel>
            {buildCard()}
            
            {buildCard()}
            
            {buildCard()}
          </Carousel>
        </div>
      </section>
    );
  }  

  function buildCard(): JSX.Element {
    return (
      <div className={classNames(styles.card)}>
        <div className={classNames(styles.upper_section)}>
          <img src="https://cdn.shopify.com/s/files/1/0041/9525/4381/files/person2.jpg" />

          <div className={classNames(styles.text_area)}>
            <Typography fontSize="16px" fontWeight="bold" color="black">MACK JECKNO</Typography>
            
            <Typography>Web Developer</Typography>
          </div>
        </div>

        <Typography className={classNames(styles.main_text)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Animi aut, incidunt similique doloribus, voluptatibus sit, quod harum a et fugit hic quasi. 
          Assumenda placeat tempora numquam qui autem. Aliquid, minima!
        </Typography>
      </div>
    );
  }
  
  return render();
};

export default ReviewsSection;