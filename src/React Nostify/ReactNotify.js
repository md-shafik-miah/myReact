import React from "react";
import { ToastContainer, toast } from "react-toastify"; //installed react-toastify package
import "react-toastify/dist/ReactToastify.css";



function ReactNotify() {
  const Notify = () => {
    toast("I AM TOP-LEFT ", { position: toast.POSITION.TOP_LEFT }); // notify position and success,info,war and error is for different purposes notification
    toast.info("I AM SUCCESS IN TOP-RIGHT", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.success("I AM INFO IN TOP-CENTER ", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000 // automatically close and after the setted duration
    });
    toast.warn("I AM WARNIING IN BOTTOM-LEFT", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false // dont close automatically
    });
    toast.error('Something is error', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    toast("I AM BOTTOM-CENTER ", { position: toast.POSITION.BOTTOM_CENTER });
  };
  return (
    <div style ={{backgroundColor: "skyblue"}}>
       <h1>This is notify </h1>
      <button onClick={Notify}>Notification</button>
      <ToastContainer />
    </div>
  );
}

export default ReactNotify;
