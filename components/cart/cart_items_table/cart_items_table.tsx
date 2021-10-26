import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import Cart from "ecommerce_client/dist/models/cart"
import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import styles from "./cart_items_table_styles.module.scss";
import classNames from "classnames";
import TableFooter from "@mui/material/TableFooter";

export interface CartItemsTableProps {
  cart: Cart;
}

const CartItemsTable: React.FC<CartItemsTableProps> = (props) => {
  function render(): JSX.Element {
    return (
      <Table className={classNames(styles.cart_items_table)}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>

            <TableCell>Image</TableCell>
            
            <TableCell>Quantity</TableCell>

            <TableCell>Price</TableCell>
          </TableRow>
          </TableHead>

          <TableBody>
            {props.cart.items.map(
              (item, index) => (
                <TableRow key={item.product.id}>
                  <TableCell>{item.product.product_name}</TableCell>

                  <TableCell>
                    <img src={item.product.images[0]} />
                  </TableCell>
                  
                  <TableCell>{item.quantity}</TableCell>
                  
                  <TableCell>{item.final_price.formatted_with_symbol}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
          
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              
              <TableCell />
              
              <TableCell />
              
              <TableCell>{props.cart.final_price.formatted_with_symbol}</TableCell>
            </TableRow>
          </TableFooter>
      </Table>
    );
  }

  return render();
}


export default CartItemsTable;