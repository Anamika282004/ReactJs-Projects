import React, { useEffect, useState } from 'react'
function Timer() {
    const[timesec,settimesec]=useState(0);
    const[timemin,settimemin]=useState(0);
    var timer;
    useEffect(() => {
      timer = setInterval(() => {
          settimesec(timesec+1);
          if(timesec==59){
           settimemin(timemin+1);
           settimesec(0);
          }
        }, 1000);
     return ()=>{clearInterval(timer)} 
   });
   const Restarttimer = ()=>{
    settimesec(0);
    settimemin(0);
   }
   const Resettimer = ()=>{
    clearInterval(timer);
   }

  return (
    <div>
<div class="flex flex-col justify-center items-center h-screen box-border bg-teal-100">
<h1 class="text-3xl"><b>Timer</b></h1>
 <p class=" text-lg font-semibold p-1">{timemin}:{timesec}</p>
<div class="flex">
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={Restarttimer}>
  Restart
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={Resettimer}>
  Reset
</button>
</div>
</div>
    </div>
  )
}

export default Timer