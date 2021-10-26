import React from "react";
import classNames from 'classnames';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import styles from "./nav_bar.module.scss";
import Link from "next/link";
import Dropdown, { DropdownAnchor, DropdownList } from "./drop_down/drop_down";
import ECommerceClient from "ecommerce_client/dist/ecommerce_client";
import Cart from "ecommerce_client/dist/models/cart";
import Badge from "@mui/material/Badge";

const NavBar: React.FC = (props) => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [cartCount, setCartCount] = React.useState<number | null>(0);
  
  React.useEffect(
    () => {
      async function asyncPart(): Promise<void> {
        const eCommerceClient: ECommerceClient = new ECommerceClient();
        setLoggedIn(eCommerceClient.authentication.isLoggedIn());

        const cart: Cart = await eCommerceClient.carts.get();
        setCartCount(cart.items.length);
      }

      asyncPart();
    },
    []
  );
  
  function render(): JSX.Element {
    return (
      <nav className={classNames("container", styles.nav_bar)}>
        <span className={classNames("h3", styles.logo)}>sample.</span>
        {/* <Typography variant="h3">craze.</Typography> */}
        
        <div>
          <Link href="/"><a className={classNames(styles.link)}>HOME</a></Link>
          
          <Dropdown>
            <DropdownAnchor className={classNames(styles.link)}>OUR COLLECTIONS</DropdownAnchor>
            
            <DropdownList className={classNames(styles.dropdown_list, styles.our_collections_dropdown_list)}>
              <div className={classNames(styles.categories)}>
                <div className={classNames(styles.category)}>
                  <p className={classNames(styles.heading)}>Women</p>
                  
                  <ul>
                    <li>
                      <Link href="/collections/our-collection"><a className={classNames(styles.link)}>Voluptatem</a></Link>
                    </li>
                  
                    <li>
                      <Link href="/collections/our-collection"><a className={classNames(styles.link)}>Rationally</a></Link>
                    </li>
                    
                    <li>
                      <Link href="/collections/our-collection"><a className={classNames(styles.link)}>Encounter</a></Link>
                    </li>
                  </ul>
                </div>

                <div className={classNames(styles.category)}>
                  <p className={classNames(styles.heading)}>Men</p>
                  
                  <ul>
                    <li>
                      <Link href="/collections/our-collection"><a className={classNames(styles.link)}>Rem Aperium</a></Link>
                    </li>
                  
                    <li>
                      <Link href="/collections/our-collection"><a className={classNames(styles.link)}>Maskeets</a></Link>
                    </li>
                  </ul>
                </div>

                <div className={classNames(styles.category)}>
                  <p className={classNames(styles.heading)}>Children</p>
                  
                  <ul>
                    <li>
                      <Link href="/collections/our-collection"><a className={classNames(styles.link)}>Milapitem</a></Link>
                    </li>
                  
                    <li>
                      <Link href="/collections/our-collection"><a className={classNames(styles.link)}>Skeets</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </DropdownList>
          </Dropdown>
          
          <Link href="/"><a className={classNames(styles.link)}>STYLISH SHOES</a></Link>
          
          <Dropdown>
            <DropdownAnchor>
              <Link href="/"><a className={classNames(styles.link)}>MORE</a></Link>
            </DropdownAnchor>

            <DropdownList className={classNames(styles.dropdown_list, styles.more_dropdown_list)}>
              <ul>
                <li>
                  <Link href="/"><a className={classNames(styles.link)}>Watches</a></Link>
                </li>

                <li>
                  <Link href="/"><a className={classNames(styles.link)}>About Us</a></Link>
                </li>
                
                <li>
                  <Link href="/"><a className={classNames(styles.link)}>Latest Blog</a></Link>
                </li>
              </ul>
            </DropdownList>
          </Dropdown>
        </div>

        <div className={classNames(styles.actions)}>
          <SearchOutlinedIcon className={classNames(styles.icon_button)} />

          <AccountCircleOutlinedIcon
            className={classNames(styles.icon_button)}
            style={{color: (loggedIn) ? "red" : "black"}}
          />

          <Link href="/cart">
            <div className={classNames(styles.button, styles.cart_button_container)}>              
              <ShoppingBagOutlinedIcon className={classNames(styles.shopping_bag_icon)} />              
            </div>
          </Link>
        </div>
      </nav>
    );
  }

  return render();
};

export default NavBar;