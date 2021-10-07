import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import React from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import styles from "../../../styles/components/home/fashion_week_section/fashion_week_section.module.scss";

const FashionWeekSection: React.FC = (props) => {
  if(typeof window == "undefined")
    return <ServerSideComponent />;
  
  return <ClientSideComponent />;
};

const ServerSideComponent: React.FC = (props) => <ActualComponent offset={0} />;

const ClientSideComponent: React.FC = (props) => {
  const offsetYResponse = useOffsetY();  

  return <ActualComponent offset={offsetYResponse.value} scrollElementRef={offsetYResponse.ref} />;
};

function useOffsetY(): {value: number, ref: React.LegacyRef<HTMLElement>} {
  const inViewResponse: InViewHookResponse = useInView();
  const inViewResponseRef: React.MutableRefObject<InViewHookResponse> = React.useRef<InViewHookResponse>(inViewResponse);
  const scrollStartPosition: React.MutableRefObject<number> = React.useRef<number>(0);
  const [offsetY, setOffsetY] = React.useState<number>(0);

  React.useEffect(
    () => { inViewResponseRef.current = inViewResponse; }, 
    [inViewResponse]
  );

  React.useEffect(
    () => {
      if(inViewResponse.inView)
        scrollStartPosition.current = window.scrollY;
    },
    [inViewResponse.inView]
  );

  React.useEffect(
    () => {
      const onScrollCallback = (event: Event) => {        
        
        if(inViewResponseRef.current.inView) {
          console.log(`${window.scrollY} - ${scrollStartPosition.current} = ${window.scrollY - scrollStartPosition.current}`);
          const relativeScrollY: number = window.scrollY - scrollStartPosition.current;
          setOffsetY(relativeScrollY * 0.06);
        }
      };

      window.addEventListener("scroll", onScrollCallback);

      return () => window.removeEventListener("scroll", onScrollCallback);
    },
    []
  );

  return {value: offsetY, ref: inViewResponse.ref};
}


const ActualComponent: React.FC<{offset: number, scrollElementRef?: React.LegacyRef<HTMLElement>}> = (props) => {
  const [hover, setHovering] = React.useState<boolean>(false);

  const render = () => {
    return (
      <section 
        id="fashion_week_section"
        ref={props.scrollElementRef}
        className={classNames(styles.fashion_week_section)} 
        style={{backgroundPositionY: `${props.offset}px`}}
        onMouseEnter={(e) => setHovering(true)}
        onMouseLeave={(e) => setHovering(false)}
      >
        {/* <img src="https://cdn.shopify.com/s/files/1/0041/9525/4381/files/parallax-img.jpg" /> */}

        <div className={classNames("container", styles.text_area)}>
          <Typography fontSize="80px" fontWeight="lighter" color="black">Fashion Week</Typography>
          
          <Typography fontSize="20px" color="black" >Over 400 luxury designer brands</Typography>

          <button>Shop Now</button>
        </div>
      </section>
    );
  };

  return render();
};

export default FashionWeekSection;