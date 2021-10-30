import React,{useState} from "react";
import {ClipLoader,CircleLoader,ClockLoader,HashLoader,RingLoader,RiseLoader} from "react-spinners"; //installed react-spinners package

function ReactLoader() {

    let [loading, setLoading] = useState(true); 
    let [color, setColor] = useState("#ffffff"); 

    return (
        <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
            value={color}
            onChange={(input) => setColor(input.target.value)}
            placeholder="Color of the loader"
        />

        <ClipLoader color={color} loading={loading} 
         size={150} />
        <div>   {/* included below the type of loading style */}
           <CircleLoader loading/>
           <ClockLoader  loading/>
           <HashLoader size={50} loading/>
           <RingLoader loading/>
           <RiseLoader loading/>
        </div>
        </div>
    );
   
  
}

export default ReactLoader;
