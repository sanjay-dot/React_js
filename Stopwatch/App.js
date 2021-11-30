// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

const StateFunction = ()=>{

  const[input,setInput] = useState("sanjay");

let ChangeFunction =(event)=>{
  let val = event.target.value;
  setInput(val);
}

  return (
    <div> 
       
      <input type="text" onChange ={ChangeFunction}/>
      <br/><br/>
      {input}
    </div>
  );
// };

// const[counter,SetCounter] = useState(0);

// let IncreaseIt = ()=>{
//   SetCounter(counter+1);

// }
// return(
//   <div>
//     {counter}
//   <button onClick={IncreaseIt}>Increment</button>
//   </div>
  
// );


};
export default StateFunction;
