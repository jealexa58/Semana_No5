import './App.css';
import Brand from './components/brand/brand';
import Display from './components/display/display';
import Button from './components/button/button';
import { useState } from 'react';

function App() {

  const [calculated, setCalculated] = useState('0');

  const handleButtonClick = (value) => {
    setCalculated(() => calculated);
  };
  const buttonValues = [
    'DEL','C','%','D/L',
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+'
  ]

const showButton =() => {
  return buttonValues.map((value) => (
    <>
    <Button 
      onButtonClick={handleButtonClick}
      value = {value} />
    </>
  ))
}



  return (
    <div className="container">
      <Brand
        title = "Calculadora Gama"
      />
      <Display
        operations = {calculated}
      />
      <div className='button-container'>
          {showButton()}
      </div>
    </div>
  );
}

export default App;
