import React, { forwardRef } from "react"; // istalled npm i @tippyjs/react package
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional



const ColorComponent =()=>{   // tootltip title and style component
    return <span style={{color:'red'}}>I am colored Component</span>
}

const CustomChild = forwardRef((props,ref)=>{  // Custom component
    return (
        <div ref={ref}>
         <div>First Line</div>
          <div>Second Line</div>
        </div>
      
    )
    
})

function Tooltip() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Tippy delay={1000} placement='right' content={<span style={{color:"yellow"}}>I am tooltip</span>}> 
        {/* inline tooltip title and style, delay for duration, placement for position to show tooltip */}
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ padding: "20px" }}>
        <Tippy placement='bottom' content={<ColorComponent/>}> 
          <button>Hover</button>
        </Tippy>
      </div>
      
      <div style={{ padding: "20px" }}>
        <Tippy placement='bottom' content={<ColorComponent/>}> 
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ padding: "20px" }}>
        <Tippy placement='top-start' content={<ColorComponent/>}> 
           <CustomChild/>
        </Tippy>
      </div>

      
    </>
  );
}

export default Tooltip;
