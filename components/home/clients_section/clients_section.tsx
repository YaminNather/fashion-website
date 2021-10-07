import Grid from "@mui/material/Grid";
import classNames from "classnames";
import React from "react";
import styles from "./clients_section.module.scss";

const ClientsSection: React.FC = (props) => {
  return (
    <Grid container={true} spacing={4} className={classNames("container", styles.clients_section)} marginTop="32px">
      <Grid item={true} md={2}>
        <img src="//cdn.shopify.com/s/files/1/0041/9525/4381/files/1_160x160@2x.png" />        
      </Grid>
      
      <Grid item={true} md={2}>
        <img src="//cdn.shopify.com/s/files/1/0041/9525/4381/files/2_160x160@2x.png" />        
      </Grid>
      
      <Grid item={true} md={2}>
        <img src="//cdn.shopify.com/s/files/1/0041/9525/4381/files/3_160x160@2x.png" />        
      </Grid>
      
      <Grid item={true} md={2}>
        <img src="//cdn.shopify.com/s/files/1/0041/9525/4381/files/4_160x160@2x.png" />        
      </Grid>
      
      <Grid item={true} md={2}>
        <img src="//cdn.shopify.com/s/files/1/0041/9525/4381/files/5_160x160@2x.png" />        
      </Grid>
      
      <Grid item={true} md={2}>
        <img src="//cdn.shopify.com/s/files/1/0041/9525/4381/files/6_160x160@2x.png" />        
      </Grid>
    </Grid>
  );
};

export default ClientsSection;