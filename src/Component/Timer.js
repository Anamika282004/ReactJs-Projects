import React, { useEffect, useState } from 'react'
function Timer() {
    const[time,settime]=useState('');
    parseInt(time);
    const timer = ()=>{
       
    }

  return (
    <div>
<div class="flex flex-col justify-center items-center h-screen box-border bg-teal-100">
<h1>Timer</h1>
  <input type="number" value={time} onChange={(e)=>{settime(e.target.value)}} class="max-w-sm space-y-3 py-3 px-4 m-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter time in seconds"/>
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 m-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={timer}>Start</button>
  <p class=" text-lg font-semibold p-1">{time}</p>
</div>
    </div>
  )
}

export default Timer