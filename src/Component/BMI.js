import React, { useState } from 'react'
function BMI() {
    const[weight,setweight] = useState('');
    const[height,setheight] = useState('');
    const[BMI,setBMI] = useState('');
    const[category,setcategory] = useState('');
    const calcBmi = ()=>{
        if(weight=='' || height=='') alert('Enter valid numbers');
        parseInt(weight);
        parseInt(height)
        let BMI = ((weight/(height*height))*10000).toFixed(2);
        setBMI(BMI);
        if(BMI<18.5) setcategory("Undernourished");
        else if(BMI>18.5 && BMI<24.9) setcategory("Normal weight");
        else if(BMI>25 && BMI<29.9) setcategory("overweight");
        else setcategory("obesity");
    }
  return (
    <div>
        <div class="flex flex-col justify-center items-center h-screen box-border bg-teal-100">
         <h1>BMI Calculator</h1>
<div class="max-w-sm space-y-3">
  <input type="text" value={weight} onChange={(e)=>{setweight(e.target.value)}} class="py-3 px-4 m-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Weight(kg's)"/>
  <input type="text" value={height} onChange={(e)=>{setheight(e.target.value)}} class="py-3 px-4 m-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Height(cms)"/>
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 m-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={calcBmi}>Submit</button>
<p class=" text-lg font-semibold p-1">Your BMI is : {BMI}  </p>
<p class=" text-lg font-semibold p-1">{category}</p>
</div>
</div>
        </div>
  )
}

export default BMI

// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater