import React from "react";

const Results = prop=>(
<div>
    <h1></h1>
    <img src={prop.gifImg} style={{height:"270px", width:"300px", outline:"none",border:"none"}}/>
    <br></br>
    <div style={{backgroundColor:"none"}}>
    <h3 style={{display:"inline-block", margin:"10px"}}>Temp: {prop.weatherTemp}</h3>
    <h3 style={{display:"inline-block", margin:"10px"}}>{prop.weatherDescript}</h3>
    <h3 style={{display:"inline-block", margin:"10px"}}>Hi: {prop.weatherHi}</h3>
    <h3 style={{display:"inline-block", margin:"10px"}}>Low: {prop.weatherLow}</h3>
    </div>


    
</div>

);

export default Results;