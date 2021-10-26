import classNames from "classnames";
import React, { Children, PropsWithChildren } from "react";
import styles from "./item_detail_select.module.scss";

export interface ItemDetailSelectProps<T> {
  className? : string;
  style?: React.CSSProperties;
  label: string;
  value?: T;
  onChange?: (value: T)=>void;
  disabled?: boolean;
}

export default function ItemDetailSelect<T>(props: PropsWithChildren<ItemDetailSelectProps<T>>) {
  function render(): JSX.Element {
    const values: T[] = [];
    const options: JSX.Element[] = [];

    React.Children.forEach(
      props.children, (element, index) => {
        const child: JSX.Element = element as JSX.Element;
        
        values.push(child.props.value);

        options.push(<option value={index}>{child.props.children}</option>);
      }
    );

    return (
      <div className={classNames(styles.item_detail_select, props.className)} style={props.style}>
        <span>{props.label}</span>

        <select 
          value={(props.value != undefined) ? values.findIndex((value, index) => value == props.value) : 0}
          onChange={(e) => {
            if(props.onChange == undefined)
            return;
            
            const optionIndex: number = parseInt(e.target.value);
            props.onChange(values[optionIndex]);            
          }}
          disabled={props.disabled} 
        >
          {options}
        </select>
      </div>
    );
  }

  return render();
}

export interface ItemDetailOptionProps<T> {
  value: T;
}

export function ItemDetailOption<T>(props: PropsWithChildren<ItemDetailOptionProps<T>>) {
  return (
    <option>{props.children}</option>
  );
}