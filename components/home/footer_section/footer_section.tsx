import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import Youtube from "@mui/icons-material/YouTube";
import classNames from "classnames";
import React from "react";
import styles from "../../../styles/components/home/footer_section/footer_section.module.scss";
import Divider from "@mui/material/Divider";
import MiddleArea from "./middle_area/middle_area";

const FooterSection: React.FC = (props) => {
  function render(): JSX.Element {
    return (
      <section id="footer_section" className={styles.footer_section}>
        <div className={classNames("container", styles.upper_area)}>
          <div className={classNames(styles.icons_area)}>          
            <FacebookOutlined className={classNames(styles.button)} />            

            <Divider orientation="vertical" flexItem={true} />
                                                
            <Instagram className={classNames(styles.button)} />
            
            <Divider orientation="vertical" flexItem={true} />
            
            <Twitter className={classNames(styles.button)} />
            
            <Divider orientation="vertical" flexItem={true} />
                        
            <Youtube className={classNames(styles.button)} />
          </div>

          <div className={classNames(styles.newsletter_input_area)}>
            <span className={classNames("h6")}>Our Newsletter: </span>

            <input placeholder="Email Address" />

            <button>SUBSCRIBE</button>

            {/* <TextField variant="outlined" className={classNames(styles.newsletter_text_field)} /> */}
          </div>
        </div>

        <MiddleArea />

        <div className={classNames(styles.bottom_area)}>
          2021, sample.
        </div>
      </section>      
    );
  }

  return render();
};


export default FooterSection;