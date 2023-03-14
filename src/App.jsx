import { useState } from 'react';
import './App.css'

const buttonsClass = 'btn btn-info w-75 mt-2'

function App() {
const [screen, setScreen] = useState('0');

const handleButtonClick = () => {
   if(screen === '0'){
    setScreen ('9');
   } else {
   setScreen(`${screen}9`);

   }
};

const handleButtonClick7 = () => {
   if(screen === '0'){
    setScreen ('7');
   } else {
   setScreen(`${screen}7`);

   }
};

const handleButtonClick8 = () => {
   if(screen === '0'){
    setScreen ('8');
   } else {
   setScreen(`${screen}8`);

   }
};

  return (
    <div className='app'>
      <h1>Calculadora</h1>
      <hr />
      <table style={{ width: '400px', margin: 'auto'}}>
        
         {/*FIRT ROW */}
        <tr>
          <td colSpan={4} style={{
            border: '1px solid black', textAlign: 'end'
            }}>
            <h2>{screen}</h2>
          </td>
        </tr>

         {/*SECOND ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>C</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>/</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>*</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>-</button>
          </td>
        </tr>

         {/*THIRD ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}
             onClick={handleButtonClick7}>7</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}
             onClick={handleButtonClick8}>8</button>
          </td>


          <td>
          <button 
             tipe='button' 
             className={buttonsClass}
             onClick={handleButtonClick}>9</button>
          </td>


          <td rowSpan={2}>
          <button 
             tipe='button' 
             className={buttonsClass}
             style={{height:"85px"}}>+</button>
          </td>
        </tr>

         {/*FOURTH ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>4</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>5</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>6</button>
          </td>
        </tr>

        {/*FIFTH ROW */}
        <tr>
          <td>
            <button 
             tipe='button' 
             className={buttonsClass}>1</button> 
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>2</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className={buttonsClass}>3</button>
          </td>
          <td rowSpan={2}>
          <button 
             tipe='button' 
             className={buttonsClass}
             style={{height: "85px"}}>=</button>
          </td>
        </tr>

        {/*SIXTH ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info mt-2 w-75'> DEL </button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info mt-2 w-75'>0</button>
          </td>
          <td>
            <button 
             tipe='button' 
             className={buttonsClass}>.</button>
          </td>
        </tr>

      </table>
    </div>
  )
}

export default App;