import  React, { useState, useRef } from 'react';  

export default function Stopwatch() {
const [timeNew, setTimeNew] = useState(0);
const [isActive, setIsActive] = useState(false);  
const intervalRef = useRef(null);

const startTimer = () => {
  if (!isActive) {
    intervalRef.current = setInterval(() => {
      setTimeNew((prevTime) => prevTime + 1);
    }, 1000);
    setIsActive(true);
  }
}
  
  const stopTimer = () => {
  clearInterval(intervalRef.current);
  setIsActive(false)
} 
const resetTimer = () => {
  clearInterval(intervalRef.current);
  setTimeNew(0);
  setIsActive(false)
}
  // const minutes = String(Math.floor(timeNew / 60)).padStart(2, "0");
  // const secs = String(timeNew % 60).padStart(2, "0");
  const minutes = Math.floor(timeNew / 60) ;
  const secs = timeNew % 60;

  return (
    <div style={{marginLeft:"10px"}}>
      <h1 style={{marginBottom:"20px"}}>Stopwatch</h1>
      <div>
         <span>Time: {minutes}:{secs < 10 ? `0${secs}` : secs}</span> 
      </div>
      <div style={{marginTop:"20px"}}>
        {isActive ? (
          <button onClick={() => stopTimer()}>Stop</button>
        ) : (
          <button onClick={() => startTimer()}>Start</button>
        )}
        <button style={{marginLeft:"5px"}} onClick={() => resetTimer()}>Reset</button>
      </div>

    </div>
  );
}   