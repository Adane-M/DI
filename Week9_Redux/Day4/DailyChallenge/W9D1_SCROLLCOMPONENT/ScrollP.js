import React from "react";
import Scroll from "./Scroll";
const ScrollP =(props)=>{

    <Scroll>
        {props.childern}
        {
        React.Children.map(children, () =>
          React.cloneElement( {
              className: `${props.className} card-list`
            })
        )
      }


    </Scroll>
}
export default ScrollP;