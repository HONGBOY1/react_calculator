import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from 'react';
import { BsBackspace  } from "react-icons/bs";
import * as events from "events";

function Header(){
  return <header>
        <h1> react_calculator </h1>
    </header>
}

let chk = false;
function Calculator(){
  /*
  /!**숫자 가져오기*!/
  const getNum = (e) => {
    setNum(num + e.target.value);
    setResult(result + e.target.value);
  };
  /!**기호 가져오기*!/
  const getOper = (e) => {
    if(num.length===0){
      setNum("0" + e.target.value);
    }
    else {

    }
  };

  const getNum = (e) => {
    let value = e.target.value;
    setInput(input + value);
    setShow(show + value);
    setResult(result+value);
  }
  const getOper = (e) => {
    setInput((input) => input + e.target.value);
    setShow(show + e.target.value);
      setResult("");
  };
  const calculate = (e) => {
    let value = e.target.value;
    setShow(show + value);
    setResult(eval(input));
  }

  const clear = () => {
    setInput('');
    setShow('');
    setResult("");
  }



*/
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [oper,setOper] = useState('');
  const [inputNum, setInputNum] = useState(0);


  const [show, setShow] = useState('');
  const [chk, setChk] = useState(false);
  const [result, setResult] = useState("");

  const getNum = (e) => {
    if(inputNum===0){
      setInput1((prev) =>prev + e.target.value);
    }
    else{
      setInput2((prev) =>prev + e.target.value);
      setInputNum(2);
    }
  }
  const getOper = (e) => {
    if(input1.length === 0) return;
    setOper(e.target.value);
    setInputNum(1);
  };
  const calculate = ( ) => {
    setResult(eval(moon))
  }

  const clear = () => {
    setInput1('');
    setInput2('');
    setResult('');
    setOper('');

  }

  const moon = input1 + oper + input2;

  return <div className="Button">
    <div>
      <input className="text2" type={"text"} value={moon}/>
    </div>
    <div>
      <input className="text" type={"text"} value={result}/>
    </div>
  <div>
      <button className="teg" value={"%"} onClick={getOper}>%</button>
      <button className="teg" onClick={clear}>C</button>
      <button className="teg" onClick={getNum} style={{fontSize : "20px"}}>
        <BsBackspace style={{marginTop : "5px"}}></BsBackspace>
      </button>
      <button className="teg" value={"/"} onClick={getOper}>&divide;</button>
    </div>
    <div>
      <button value={7} onClick={getNum}>7</button>
      <button value={8} onClick={getNum}>8</button>
      <button value={9} onClick={getNum}>9</button>
      <button value={"*"} onClick={getOper} className="teg" >X</button>
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
      <button value={"="} onClick={calculate} style={{background : "#1d6978", color:"white"}}>=</button>
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

