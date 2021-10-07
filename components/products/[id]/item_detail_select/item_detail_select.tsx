import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import styles from "./item_detail_select.module.scss";

export interface ItemDetailSelectProps<T> {
  className? : string;
  style?: React.CSSProperties;
  label: string;  
}

export default function ItemDetailSelect<T>(props: PropsWithChildren<ItemDetailSelectProps<T>>) {
  function render(): JSX.Element {
    return (
      <div className={classNames(styles.item_detail_select, props.className)} style={props.style}>
        <span>{props.label}</span>

        <select>
          {props.children}
        </select>
      </div>
    );
  }

  return render();
}