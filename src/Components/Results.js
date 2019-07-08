import React from "react";

const Results = prop=>(
<div>
    <h1></h1>
    <h1>Temperature: {prop.weatherTemp}</h1>
    <h2>{prop.weatherDescript}</h2>
    <h3>Hi: {prop.weatherHi}</h3>
    <h3>Low: {prop.weatherLow}</h3>
    <br></br>
    <img src={prop.gifImg}/>
    
</div>

);

export default Results;