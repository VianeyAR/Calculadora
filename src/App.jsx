import { useState } from 'react';
import './App.css'

const buttonsClasses = 'btn btn-info w-75 mt-2';

function App() {
   const [operator, setOperator] = useState('');
   const [previusVale, setPreviusValue] = useState('');
   const [clearScreen, setClearScreen] = useState(false);
   const [screen, setScreen] = useState('0');
   const handleButtonClick = (e) => {
    const value = e.target.value;
    if(value === '.'){
      if(screen.indexOf('.') !== -1) return;
    }
    if(value === 'C') {
      setScreen('0');
      return;
    }
    if(clearScreen){
      setScreen(value);
      setClearScreen(false);
      return;
    }
    if (screen === '0' && value !== '.') {
      setScreen(value);
    } else {
      setScreen(`${screen}${value}`)
       }
  };
  const handleDelButtonClick = () => {
    if(screen.length === 1){
      setScreen('0')
      return;
    } 
      setScreen(screen.slice(0,-1));
  }



  const handleOperationButtonClick = (e) => {
   setClearScreen(true);
   setPreviusValue(screen);
   setOperator(e.target.value);

  }

 const handleEqualButtonClick = ()=> {
   let result = 0;
   let a = +previusVale;
   let b = +screen;
   switch (operator){
      case '+':
         result = a+b;
         break;
      case '-':
        result = a-b;
        break;
      case '*':
        result = a*b;
        break;
      case '/':
        result = a/b;
        break;
      default:
        break
    }
   setScreen(result);
  }

  return (
    <div className='app'>
      <h1>Calculadora</h1>
      <hr/>
      <table style={{ width: '400px', margin: 'auto'}}>
        

         {/*FIRST ROW */}
        <tr>
          <td colSpan={4} style={{
            border: '1px solid black', textAlign: 'end'
            }}>
            <h2>{screen}</h2>
          </td>
        </tr>


         {/*SECOND ROW*/}
        <tr>
          <td>
            <button type='button' 
             className={buttonsClasses}
             value='C'
             onClick={(e) => handleButtonClick(e)}
             >C</button>
          </td>

          <td>
            <button type='button'
             className={buttonsClasses}
             value="/"
             onClick={(e) => handleOperationButtonClick(e)} 
             >/</button>
          </td>
          
          <td>
            <button type='button'
             className={buttonsClasses}
             value="*"
             onClick={(e) => handleOperationButtonClick(e)} 
             >*</button>
          </td>

          <td>
            <button type='button'
             className={buttonsClasses} 
             value="-"
             onClick={(e) => handleOperationButtonClick(e)}
             >-</button>
          </td>
        </tr>


         {/*THIRD ROW*/}
        <tr>
          <td>
            <button type='button' 
             className={buttonsClasses}
             value='7'
             onClick={(e) => handleButtonClick(e)}
             >7</button>
          </td>

          <td>
            <button type='button' 
             className={buttonsClasses}
             value='8'
             onClick={(e) => handleButtonClick(e)}
             >8</button>
          </td>

          <td>
            <button type='button' 
             className={buttonsClasses}
             value='9'
             onClick={(e) => handleButtonClick(e)}
             >9</button>
          </td>

          <td rowSpan={2}>
            <button type='button' 
             className={buttonsClasses}
             style={{height:"85px"}}
             value="+"
             onClick={(e) => handleOperationButtonClick(e)}
             >+</button>
          </td>
        </tr>


         {/*FOURTH ROW*/}
        <tr>
          <td>
            <button type='button' 
             className={buttonsClasses}
             value='4'
             onClick={(e) => handleButtonClick(e)}
             >4</button>
          </td>

          <td>
            <button type='button' 
             className={buttonsClasses}
             value='5'
             onClick={(e) => handleButtonClick(e)}
             >5</button>
          </td>

          <td>
            <button type='button' 
             className={buttonsClasses}
             value='6'
             onClick={(e) => handleButtonClick(e)}
             >6</button>
          </td>
        </tr>


        {/*FIFTH ROW*/}
        <tr>
          <td>
            <button type='button' 
             className={buttonsClasses}
             value='1'
             onClick={(e) => handleButtonClick(e)}
             >1</button> 
          </td>

          <td>
            <button type='button' 
             className={buttonsClasses}
             value='2'
             onClick={(e) => handleButtonClick(e)}
             >2</button>
          </td>

          <td>
            <button type='button' 
             className={buttonsClasses}
             value='3'
             onClick={(e) => handleButtonClick(e)}
             >3</button>
          </td>

          <td rowSpan={2}>
            <button type='button' 
             className={buttonsClasses}
             style={{height: "85px"}}
             value ='='
             onClick={(e) => handleEqualButtonClick(e)}
             >=</button>
          </td>
        </tr>


        {/*SIXTH ROW*/}
        <tr>
          <td>
            <button type='button'
             className={buttonsClasses}
             onClick={handleDelButtonClick}
             >DEL</button>
          </td>

          <td>
            <button type='button' 
             className={buttonsClasses}
             value='0'
             onClick={(e) => handleButtonClick(e)}
             >0</button>
          </td>

          <td>
            <button type='button'
            className={buttonsClasses}
            value='.'
            onClick={(e) => handleButtonClick(e)}
            >.</button>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default App;