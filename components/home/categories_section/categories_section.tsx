import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import React from "react";
import Carousel from "../../carousel/carousel";
import CategoryCard from "./category_card/category_card";

const CategoriesSection: React.FC = (props) => {
  const render = () => {
    return (
      <section id="categories_section">
        <Box marginTop="128px">
          <Carousel slidesPerView={3} spaceBetween={32} className={classNames("container")}>
            <CategoryCard category="WOMEN'S FASHION" imageSrc="https://cdn.shopify.com/s/files/1/0041/9525/4381/files/cat-img-5.jpg?v=1560413538"  />
          
            <CategoryCard category="OTHER ACCESSORIES" imageSrc="https://cdn.shopify.com/s/files/1/0041/9525/4381/files/cat-img-1.jpg?v=1560413374" />
          
            <CategoryCard category="CHILDRENS ACCESSORIES" imageSrc="https://cdn.shopify.com/s/files/1/0041/9525/4381/files/cat-img-3.jpg?v=1560413459" />
          </Carousel>
        </Box>
      </section>
    );
  };

  return render();
};

export default CategoriesSection;