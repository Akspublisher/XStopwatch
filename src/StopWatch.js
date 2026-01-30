import  React, { useState } from 'react';  

export default function StopWatch() {
const [timeNew, setTimeNew] = useState("0:00");


  return (
    <div>
      <h1 style={{marginBottom:"20px"}}>StopWatch</h1>
      <div>
         <label>Time:</label>
         <span>{timeNew}</span> 
      </div>
      <div style={{marginTop:"20px"}}>
         <button>Start</button>
         <button style={{marginLeft:"5px"}}>Reset</button>
      </div>

    </div>
  );
}   