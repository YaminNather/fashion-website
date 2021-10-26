import Grid from "@mui/material/Grid";
import classNames from "classnames";
import React from "react";
import styles from "./clients_section.module.scss";
import Image from "next/image";

const ClientsSection: React.FC = (props) => {
  function render(): JSX.Element {
    return(
      <div className={classNames("container", styles.clients_section)}>
        {buildImage("https://cdn.shopify.com/s/files/1/0041/9525/4381/files/1_160x160@2x.png")}
          
        {buildImage("https://cdn.shopify.com/s/files/1/0041/9525/4381/files/2_160x160@2x.png")}

        {buildImage("https://cdn.shopify.com/s/files/1/0041/9525/4381/files/3_160x160@2x.png")}
  
        {buildImage("https://cdn.shopify.com/s/files/1/0041/9525/4381/files/4_160x160@2x.png")}
  
        {buildImage("https://cdn.shopify.com/s/files/1/0041/9525/4381/files/5_160x160@2x.png")}
  
        {buildImage("https://cdn.shopify.com/s/files/1/0041/9525/4381/files/6_160x160@2x.png")}
      </div>
    );
  }

  function buildImage(src: string): JSX.Element {
    return (
      <div className={classNames(styles.image)}>
        <Image src={src} layout="fill" objectFit="contain" />
      </div>
    );
  }

  return render();
};

export default ClientsSection;