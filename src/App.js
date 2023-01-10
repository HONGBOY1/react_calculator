import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Header(){
  return <header>
        <h1> react_calculator </h1>
    </header>
}

function Calculator(){

  const [num,cnt] = useState("");
  const cntUp = (Up) => {
    if(Up=="C"){
      cnt((num - num)+" ");
    }
    else cnt(num + Up);
  };
  return <div className="Button">
    <input className="text" type={"text"} value={num}/>
    <div>
      <button className="teg" onClick={(e)=>{cntUp("C")}}>C</button>
      <button className="teg">+/-</button>
      <button className="teg">%</button>
      <button className="teg">&divide;</button>
    </div>
    <div>
      <button onClick={(e)=>{cntUp(7)}}>7</button>
      <button onClick={(e)=>{cntUp(8)}}>8</button>
      <button onClick={(e)=>{cntUp(9)}}>9</button>
      <button className="teg">X</button>
    </div>
    <div>
      <button onClick={(e)=>{cntUp(4)}}>4</button>
      <button onClick={(e)=>{cntUp(5)}}>5</button>
      <button onClick={(e)=>{cntUp(6)}}>6</button>
      <button className="teg">-</button>
    </div>
    <div>
      <button onClick={(e)=>{cntUp(1)}}>1</button>
      <button onClick={(e)=>{cntUp(2)}}>2</button>
      <button onClick={(e)=>{cntUp(3)}}>3</button>
      <button className="teg">+</button>
    </div>
    <div>
      <button style={{width : "165px"}} onClick={(e)=>{cntUp(0)}}>0</button>
      <button className="teg">.</button>
      <button style={{background : "#1d6978", color:"white"}}>=</button>
    </div>
  </div>
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Calculator></Calculator>
    </div>
  );
}

export default App;

