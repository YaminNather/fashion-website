import classNames from "classnames";
import React from "react";
import styles from "./filter_bar.module.scss";

const FilterBar: React.FC = (props) => {
  function render(): JSX.Element {
    return (
      <div className={classNames(styles.filter_bar)}>
        SORT BY: 
        
        <select>
          <option value="Featured">Featured</option>
          
          <option value="Best Selling">Best Selling</option>
          
          <option value="Price- Low to High">Price- Low to High</option>
          
          <option value="Price- High to Low">Price- High to Low</option>
        </select>

        <span className={classNames(styles.product_count)}>19 products</span>
      </div>
    );
  }

  return render();
}


export default FilterBar;