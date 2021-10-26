import classNames from "classnames";
import React from "react";
import styles from "./to_page_bar.module.scss";
import Link from "next/link";

export interface ToPageBarProps {
  currentPage: number;
}

const ToPageBar: React.FC<ToPageBarProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div className={classNames(styles.to_page_bar)}>
        {buildNumbers()}

        {<Link href="/"><button>{"NEXT >>"}</button></Link>}
      </div>
    );
  }

  function buildNumbers(): JSX.Element[] {
    const r: JSX.Element[] = [];
    for(let i: number = 1; i <= 4; i++) {
      r.push( 
        <Link key={i} href="/">
          <a><button className={classNames((i == props.currentPage) ? [styles.active_button] : [])}>{i}</button></a>
        </Link> 
      );
    }

    return r;
  }

  return render();
}


export default ToPageBar;