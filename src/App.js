import logo from './logo.svg';
import './App.css';
import {useState,useRef,useEffect} from "react";


function App() {
  const [result,setResult]=useState("");
const inputRef=useRef(null);
useEffect(()=>inputRef.current.focus());

const handleClick=(e)=>{
 setResult(result +e.target.name)
 e.preventDefault();
}
const handleClear=(e)=>{
  setResult("")
  
}
const calculate=(e)=>{
  try{
    setResult(eval(result).toString());
    e.preventDefault();
  }catch(error){
    setResult("error")
    e.preventDefault();
  }
}
  return (
   <form className="form">
    <h1 className='head'>Calculator</h1>
    <div>
      <input className="box" type="text" value={result} ref={inputRef}/>
      <button  className='clear'id="color" onclick={handleClear}>C</button>
    </div>
    <div >
    <button className='button' id="color"name="1" onClick={handleClick}>1</button>
    <button className='button' id="color"name="2" onClick={handleClick}>2</button>
    <button className='button' id="color"name="3" onClick={handleClick}>3</button>
    <button className='button'id="color" name="/" onClick={handleClick}>/</button>
    </div>
    <div >
      <button className='button' id="color"name="4" onClick={handleClick}>4</button>
      <button className='button' id="color" name="5" onClick={handleClick}>5</button>
      <button  className='button' id="color"name="6" onClick={handleClick}>6</button>
      <button  className='button'id="color"name="-" onClick={handleClick}>-</button>
    </div>
    <div>
      <button className='button' id="color"name="7" onClick={handleClick}>7</button>
      <button  className='button'id="color"name="8" onClick={handleClick}>8</button>
      <button  className='button'id="color"name="9" onClick={handleClick}>9</button>
      <button className='button'id="color"name="+" onClick={handleClick}>+</button>
    </div>
    <div >
      <button  className='button'id="color" name="." onClick={handleClick}>.</button>
      <button  className='button'id="color"name="0" onClick={handleClick}>0</button>
      <button className='button'id="color" name="=" onClick={calculate} >=</button>
      <button  className='button'id="color"name="*" onClick={handleClick}>*</button>
    </div>
   </form>
  
  );
}

export default App;
