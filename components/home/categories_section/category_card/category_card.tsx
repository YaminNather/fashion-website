import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import React from "react";
import styles from "../../../../styles/components/home/categories_section/category_card/category_card.module.scss";

export interface CategoryCardProps {
  category: string;
  imageSrc: string;  
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const [hovering, setHovering] = React.useState<boolean>(false);

  const render = () => {
    const textAreaScale: number = (hovering) ? 1.0 : 0.0;

    return (
      <div className={classNames(styles.category_card)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <img src={props.imageSrc} />

        <div className={classNames(styles.text_area)} style={{transform: `scaleY(${textAreaScale})`}}>
          <Typography color="white" variant="h6">{props.category}</Typography>

          <Typography color="white">SHOP NOW</Typography>
        </div>
      </div>
    );
  };

  return render();
};


export default CategoryCard;