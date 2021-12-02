import Typography from "@mui/material/Typography";
import classNames from "classnames";
import React from "react";
import styles from "../../../styles/components/home/services_section/services_section.module.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AirplanemodeActiveOutlined from "@mui/icons-material/AirplanemodeActiveOutlined";
import CardGiftcardOutlined from "@mui/icons-material/CardGiftcardOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import ReplayOutlined from "@mui/icons-material/ReplayOutlined";
import Divider from "@mui/material/Divider";
import { createTheme, Theme, ThemeProvider } from "@mui/material";

const ServicesSection: React.FC = (props) => {
  const render = () => {
    return (
      <section id="services_section" className={classNames("container", styles.services_section)}>        
        <Grid container={true} alignItems="center" spacing={8}>
          <Grid item={true} md={4}>
            <Typography variant="h6">Our Best Services</Typography>
            
            <Typography marginTop="8px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex.</Typography>
          </Grid>

          <Grid item={true} md={8}>
            <Box display="flex" justifyContent="space-between">
              <Icon icon={<AirplanemodeActiveOutlined />} />

              <Divider orientation="vertical" flexItem={true} variant="middle" />
              
              <Icon icon={<PhoneOutlined />} />

              <Divider orientation="vertical" flexItem={true} variant="middle" />
              
              <Icon icon={<CardGiftcardOutlined />} />
              
              <Divider orientation="vertical" flexItem={true} variant="middle" />
              
              <Icon icon={<ReplayOutlined />} />
            </Box>
          </Grid>
        </Grid>
      </section>
    );
  };

  return render();
};

export default ServicesSection;


const Icon: React.FC<{icon: React.ReactNode}> = (props) => {
  const render = () => {
    const theme: Theme = createTheme({
      components: {        
        MuiSvgIcon: { defaultProps: { fontSize: "large", htmlColor: "rgba(0, 0, 0, 0.8)" } }
      }
    });    

    return (
      <ThemeProvider theme={theme}>        
        <Box
          display="inline-flex" 
          // marginLeft="32px" marginRight="32px"
          width="96px" height="96px" 
          border="1px solid rgba(0, 0, 0, 0.2)" borderRadius="3000px" 
          justifyContent="center" alignItems="center"          
        >
          {props.icon}
        </Box>
      </ThemeProvider>
    );
  }
  
  return render();
};