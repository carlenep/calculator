import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, onClick }) {
  return (
    <button className='Button' onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState('0');

  const buttonClickhandler = (e) => {
    const value = e.target.innerHTML;

    if (value === 'CLR') {
      setDisp('0');
    } 
    else if (value === '=') {
      try {
        let expression = disp;
        expression = expression.replaceAll('÷', '/');
        expression = expression.replaceAll('x', '*');
        
        setDisp(String(eval(expression)));
      } catch (err) {
        setDisp('Error');
      }
    } 
    else if (value === 'PINEDA') {
      setDisp('PINEDA');
    } 
    else {
      if (disp === '0' || disp === 'Error' || disp === 'PINEDA') {
        setDisp(value);
      } else {
        setDisp(disp + value);
      }
    }
  };

  return (
    <div className='App'>
      <div className='Header'>Calculator of Carlene Pineda - WMD-3A</div>
      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={8} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={9} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={"÷"} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={4} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={5} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={6} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={"x"} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={1} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={2} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={3} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={"-"} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={"CLR"} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={0} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={"="} onClick={buttonClickhandler} />
          <CalcButton buttonLabel={"+"} onClick={buttonClickhandler} />
        </div>
        <CalcButton buttonLabel={"PINEDA"} onClick={buttonClickhandler} />
      </div>
    </div>
  );
}

export default App;