import React from 'react';
import StateContainer from "./Components/StateContainer";

const App = prop =>(

  <div style={{backgroundColor:"none",height:"100%",width:"100%", padding:"0px", margin:"0px", backgroundImage: `url(${prop.gifImg})`}}>
    <div style={{backgroundColor:"none",lineHeight:"10px", width:"100%"}}>
    <h1>Black-U-Weather</h1>
    <h3 style={{fontStyle:"italic", fontSize:"15px"}}>When Numbers aren't enough</h3>
    </div>
    <StateContainer />
  </div>

);

export default App;
