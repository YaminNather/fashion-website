import classNames from "classnames";
import React from "react";
import styles from "./drop_down.module.scss";

const context = React.createContext<boolean>(false);

export interface DropdownProps {
  className?: string;
  style?: React.CSSProperties; 
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [mouseEntered, setMouseEntered] = React.useState<boolean>(false);

  function render(): JSX.Element {
    return (
      <context.Provider value={mouseEntered}>
        <div 
          className={classNames(styles.drop_down, props.className)} style={props.style}
          onMouseEnter={(e) => setMouseEntered(true)}
          onMouseLeave={(e) => setMouseEntered(false)}
        >
          {props.children}
        </div>
      </context.Provider>
    );
  }

  return render();
}


export default Dropdown;

export interface DropdownAnchorProps {
  className?: string;
  style?: React.CSSProperties;
}

export const DropdownAnchor: React.FC<DropdownAnchorProps> = (props) => {
  return <a className={props.className} style={props.style}>{props.children}</a>;
}


export interface DropdownListProps {
  className?: string;
  style?: React.CSSProperties;
}

export const DropdownList: React.FC<DropdownListProps> = (props) => {
  const mouseOnLabel: boolean = React.useContext<boolean>(context);  

  function render(): JSX.Element {
    const scale: number = (mouseOnLabel) ? 1.0 : 0.0;

    return (
      <div 
        className={classNames(styles.drop_down_menu, props.className)} 
        style={{...props.style, transform: `scaleY(${scale})`}}
      >
        {props.children}
      </div>      
    );
  }

  return render();
}