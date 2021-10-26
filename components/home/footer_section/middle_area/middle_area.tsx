import Grid from "@mui/material/Grid";
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "../../../../styles/components/home/footer_section/middle_area/middle_area.module.scss";

const MiddleArea: React.FC = (props) => {
  function render(): JSX.Element {
    return (
      <Grid container={true} spacing={4} className={classNames("container", styles.middle_area)}>
        <Grid item={true} md={6}>
          <p className={classNames(styles.heading)}>About Us</p>

          <p>
            Our company’s ecommerce site offers many different styles that “combine heritage with modernity, 
            simplicity with playfulness and one of the most unique features of the site is that models appear 
            in different outfits with a product to show shoppers different ways it can be worn.
          </p>
        </Grid>

        <Grid item={true} md={2}>
          {buildInformation()}
        </Grid>
        
        <Grid item={true} md={2}>
          {buildQuickLinks()}          
        </Grid>

        <Grid item={true} md={2}>
          {buildStoreInformation()}
        </Grid>
      </Grid>
    );
  }

  function buildInformation(): JSX.Element {
    return buildLinks(
      "Information",
      [
        { label: "Search", href: "/" },
        { label: "Contact Us", href: "/" },
        { label: "Gallery", href: "/" },
        { label: "FAQ's", href: "/" },
        { label: "About Us", href: "/" },
      ]
    ); 
  }
  
  function buildQuickLinks(): JSX.Element {
    return buildLinks(
      "Quick Links",
      [
        { label: "Search", href: "/" },
        { label: "Contact Us", href: "/" },
        { label: "Gallery", href: "/" },
        { label: "FAQ's", href: "/" },
        { label: "About Us", href: "/" },
      ]
    ); 
  }

  function buildLinks(heading: string, linkDetails: { label: string, href: string }[]): JSX.Element {
    return (
      <>
        <p className={classNames(styles.heading)}>{heading}</p>

        <ul>
          {linkDetails.map( 
            (value, index) => (
              <li key={index}>
                <Link href={value.href}><a>{value.label}</a></Link>
              </li>
            )
          )}
        </ul>
      </>
    );
  }

  function buildStoreInformation(): JSX.Element {
    return (
      <>
        <p className={classNames(styles.heading)}>Store Information</p>

        <ul>
          <li>
            Craze the online shopping store. 60, 29th street, san francisco , CA 94110.
          </li>

          <li>
            Call us : +123-456-7890
          </li>

          <li>
            <Link href="/"><a>Email: Support@Company.com</a></Link>
          </li>
        </ul>
      </>
    );
  }

  return render();
};

export default MiddleArea;