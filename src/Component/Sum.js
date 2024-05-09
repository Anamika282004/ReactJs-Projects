import React, { useState } from 'react'
function Sum() {
    const [num1, setnum1] = useState('');
    const [num2, setnum2] = useState('');
    const[sum,setsum] = useState('');
    const calculatesum = (event)=>{
        if(num1=='' || num2=='') alert('Enter valid numbers');
        event.preventDefault();
        let sum = parseInt(num1)+parseInt(num2); // convert string to number
        setsum(sum);
    }
  return (
    <div>
<div class="bg-slate-700 h-screen px-10 py-20 w-full">
    <div class="max-w-xl">
      <div class="flex space-x-1 items-center mb-2">
        <p class="text-white text-lg font-semibold">Enter two Numbers </p>
      </div>
      <div class="flex space-x-4">
          <input type="number" class="w-full rounded-md rounded-r-none" value={num1} onChange={(e)=>{setnum1(e.target.value)}} placeholder='Enter first number' />
          <input type="number" class="w-full rounded-md rounded-r-none" value={num2} onChange={(e)=>{setnum2(e.target.value)}} placeholder='Enter Second number' />
        <button class="bg-white px-6 text-lg font-semibold py-4 rounded-md" onClick={calculatesum}>Add</button>
      </div>
    </div>
    <p class="text-white text-lg font-semibold p-10">Your sum is : {sum}  </p>
</div>
    </div>
  )
}

export default Sum