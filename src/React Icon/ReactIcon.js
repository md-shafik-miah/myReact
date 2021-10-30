import React from "react"; //installed react-Icon package npm install react-icons --save
import { AiFillApple } from "react-icons/ai";
import { BsFillAlarmFill } from "react-icons/bs";
import { BiAlarmSnooze } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";
import { FcAlarmClock } from "react-icons/fc";
import { IconContext } from "react-icons/lib";

function ReactIcon() {
  return (
    <IconContext.Provider value= {{color: "blue", size: "50px"}} >
      <div>
        <h1>
          Ant Design Icon <AiFillApple/>
        </h1>
        <h1>
          Bootstrip Icon <BsFillAlarmFill/>
        </h1>
        <h1>
          boxIcons <BiAlarmSnooze color = "red" size= "40px"/>
        </h1>
        <h1>
          DevIcons <DiAndroid/>
        </h1>
        <h1>
          Flat Icons <FcAlarmClock/>
        </h1>
      </div>
    </IconContext.Provider>
  );
}

export default ReactIcon;
