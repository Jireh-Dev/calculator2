import { useState } from 'react';
import './App.css'

function CalcDisplay({dispValue}) {

  return (
      <div className='Display'>
        {dispValue}
      </div>
  );
}

function CalcButton({buttonLabel, buttonClassName = "Button", onClick}) {

  return (
      <button className='Button' onClick={onClick}>
        {buttonLabel}
      </button>
  );
}

function App() {
  const[disp, setDisp] = useState(0);
  const[operand1, setOperand1] = useState(null);
  const[operation, setOperator] = useState(null);
  const[operand2, setOperand2] = useState(null);
  const[result, setResult] = useState(false);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML; 

    if (value === "C") {
      setDisp(0);
      setOperand1(null);
      setOperator(null);
      setOperand2(null);
      setResult(false);
    }

    if (value === "Canlas") {
      setDisp("Raphael Canlas");
    }
  }

  const numbuttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML; 

    console.log(value + "|" + operand1 + "|" + operand2 + "|" + operation);

    if (result === true) {
      setDisp(value);
      setOperand1(value);
      setOperand2(null);
      setOperator(null);
      setResult(false);
      return;
    }

    if (operation === null) {
      if (operand1 === null) {
        setDisp(value);
        setOperand1(value);
      } else {
        setDisp(operand1 + value);
        setOperand1(operand1 + value);
      }
    } else {
      if (operand2 === null) {
        setDisp(value);
        setOperand2(value);
      } else {
        setDisp(operand2 + value);
        setOperand2(operand2 + value);
      }
    }
  }

  const equalButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML; 
    
    if (operation === "+") {
      const answer = parseInt(operand1) + parseInt(operand2);
      setDisp(answer);
      setOperand1(answer);
      setOperand2(null);
      setOperator(null);
      setResult(true);
    } else if (operation === "-") {
      const answer = parseInt(operand1) - parseInt(operand2);
      setDisp(answer);
      setOperand1(answer);
      setOperand2(null);
      setOperator(null);
      setResult(true);
    } else if (operation === "*") {
      const answer = parseInt(operand1) * parseInt(operand2);
      setDisp(answer);
      setOperand1(answer);
      setOperand2(null);
      setOperator(null);
      setResult(true);
    } else if (operation === "÷") {
      const answer = parseInt(operand1) / parseInt(operand2);
      setDisp(answer);
      setOperand1(answer);
      setOperand2(null);
      setOperator(null);
      setResult(true);
    }
  }
  
  const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML; 

    if (result === true) {
      setOperator(value);
      setOperand2(null);
      setResult(false);
      setDisp(value);
      return;
    }

    setOperator(value);
    setDisp(value);
  }

  return (
    <div className='Background'>
      <div className='App'>
        <div className='Header'>
          <strong>Calculator of Raphael Canlas - WMD3A</strong>
        </div>

        <div className='Calculator'>
          <CalcDisplay dispValue={disp}/>

          <div className='Keypad'>
            <CalcButton buttonLabel={7} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={8} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={9} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={'÷'} onClick={operationButtonClickHandler}/>

            <CalcButton buttonLabel={4} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={5} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={6} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={'*'} onClick={operationButtonClickHandler}/>

            <CalcButton buttonLabel={1} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={2} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={3} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={'-'} onClick={operationButtonClickHandler}/>

            <CalcButton buttonLabel={'C'} buttonCLassName="ClrButton" onClick={buttonClickHandler}/>
            <CalcButton buttonLabel={0} onClick={numbuttonClickHandler}/>
            <CalcButton buttonLabel={'='} onClick={equalButtonClickHandler}/>
            <CalcButton buttonLabel={'+'} onClick={operationButtonClickHandler}/>

            <CalcButton buttonLabel={'Canlas'} onClick={buttonClickHandler}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App