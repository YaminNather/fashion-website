import { Product } from "@chec/commerce.js/types/product";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import React from "react";
// import Product from "../../product/product";
import ProductsList from "../products_list/products_list";

// const products: Product[] = [
//   { 
//     name: "Aenean Digissim",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/03_8fb195d2-04e8-4b74-863b-2eb73ea6ea70_2048x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   },
//   { 
//     name: "Dignissim Ligula",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/020_2048x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   },
//   { 
//     name: "Dignissim Ligula",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/018_1728x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   },
//   { 
//     name: "Dignissim Ligula",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/017_2048x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   }
// ];

export interface TopProductsSectionProps {
  products: Product[];
}

const TopProductsSection: React.FC<TopProductsSectionProps> = (props) => {
  const categories: string[] = React.useRef<string[]>(["All", "Featured", "Best Sellers", "New"]).current;
  const [tab, setTab] = React.useState<string>("All");

  const render = () => {
    return (
      <section id="top_products_section">
        <Box marginTop="128px" paddingX="200px" display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2">Top Products</Typography>

          <Tabs value={tab} onChange={(event, value) => setTab(value)}>
            {categories.map( (value, index) => <Tab value={value} label={value} /> )}
          </Tabs>          

          <ProductsList products={props.products} style={{marginTop: "32px"}} />
        </Box>
      </section>
    );
  };

  return render();
};

export default TopProductsSection;