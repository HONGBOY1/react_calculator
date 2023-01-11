import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BsBackspace  } from "react-icons/bs";
import * as events from "events";

function Header(){
  return <header>
        <h1> react_calculator </h1>
    </header>
}

let chk = false;
function Calculator(){
  /**첫 번쨰 숫자*/
  const [num,setNum] = useState("");
  /**두 번쨰 숫자*/
  const [scnum, SetScnum]= useState("");
  /**답 번쨰 숫자*/
  const [dab, setDab] = useState("");
  /**첫 번쨰 여부 체크*/
  const [operchk, setOperchk] = useState(false);
  /**실행 횟수*/
  const [cnt, setCnt] = useState(0);


  /**숫자 가져오기*/
  const getNum = (e) => {
    if(operchk === true){
      SetScnum((prev) => prev + e.target.value);
    }
    else {
      setNum((prev) => prev + e.target.value);
    }

  };
  /**기호 가져오기*/
  const getOper = (e) => {
    if (num.length === 0) {
      return;
    }
    setOperchk(true);
    if(e.target.value == "=" && cnt!=0) setDab((prev) =>  dab + " "+ scnum +" "+ e.target.value)
    else {
      setCnt(cnt+1);
      setDab((prev) => num + " " + e.target.value);
    }
  };

  /**다 지우기*/
  const allClear = () => {
    setOperchk(false);
    setNum((prev) => "");
    setDab((prev) => "");
  };

  /**한개씩 지우기*/
  const delCalc = () => { 
    setOperchk(false);
    let str = String(num).slice(0, -1);
    setNum((prev) => str);
  };

  /**input 출력 창*/
  let content = null;
  if(operchk === true){
    content = <input className="text" type={"text"} value={scnum}/>
  }else{
    content = <input className="text" type={"text"} value={num}/>
  }

  return <div className="Button">
    <div>
      <input className="text2" type={"text"} value={dab}/>
    </div>
    <div>{content}</div>
    <div>

      <button className="teg" value={"%"} onClick={getOper}>%</button>
      <button className="teg" onClick={allClear}>C</button>
      <button className="teg" onClick={delCalc} style={{fontSize : "20px"}}>
        <BsBackspace style={{marginTop : "5px"}}></BsBackspace>
      </button>
      <button className="teg" value={"&divide;"} onClick={getOper}>&divide;</button>
    </div>
    <div>
      <button value={7} onClick={getNum}>7</button>
      <button value={8} onClick={getNum}>8</button>
      <button value={9} onClick={getNum}>9</button>
      <button value={"x"} onClick={getOper} className="teg" >X</button>
    </div>
    <div>
      <button value={4} onClick={getNum}>4</button>
      <button value={5} onClick={getNum}>5</button>
      <button value={6} onClick={getNum}>6</button>
      <button value={"-"} onClick={getOper} className="teg">-</button>
    </div>
    <div>
      <button value={1} onClick={getNum}>1</button>
      <button value={2} onClick={getNum}>2</button>
      <button value={3} onClick={getNum}>3</button>
      <button value={"+"} onClick={getOper} className="teg">+</button>
    </div>
    <div>
      <button value={"+/-"} onClick={getOper}>+/-</button>
      <button value={0} onClick={getNum}>0</button>
      <button value={"."} onClick={getOper} className="teg">.</button>
      <button value={"="} onClick={getOper} style={{background : "#1d6978", color:"white"}}>=</button>
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

