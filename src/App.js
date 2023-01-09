import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
        <h1> react_calculator </h1>
    </header>
}

function Calculator(){
  return <div>
    <input/>
    <div>
      <button>C</button>
    </div>
    <div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>/</button>
    </div>
    <div>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>X</button>
    </div>
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
    </div>
    <div>
      <button>0</button>
      <button>.</button>
      <button>=</button>
      <button>+</button>
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
