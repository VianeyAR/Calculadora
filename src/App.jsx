import { useState } from 'react';
import './App.css'
import Button from './components/Button';

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
        if(b === 0){
          result = 'Infinito'
          setClearScreen(true)
       
        }else{
        result = a/b;
        }
        break;
      default:
        break
    }
   setScreen(result);
  }

  const infoButtons = [
    [
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'C'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleOperationButtonClick,
        rows:1,
        style:{},
        value:'/'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleOperationButtonClick,
        rows:1,
        style:{},
        value:'*'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleOperationButtonClick,
        rows:1,
        style:{},
        value:'-'
      }
    ],
    [
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'7'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'8'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'9'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleOperationButtonClick,
        rows:2,
        style:{height:"85px"},
        value:'+'
      }
    ],
    [
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'4'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'5'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'6'
      }
    ],
    [
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'1'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'2'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'3'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleEqualButtonClick,
        rows:2,
        style:{height:"85px"},
        value:'='
      }
    ],
    [
      {
        Classes:buttonsClasses,
        handleClick:handleDelButtonClick,
        rows:1,
        style:{},
        value:'DEL'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'0'
      },
      {
        Classes:buttonsClasses,
        handleClick:handleButtonClick,
        rows:1,
        style:{},
        value:'.'
      }
    ]
   ]

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
         {
      infoButtons.map((row) => {
        return(
          <tr>
            {
            row.map((btn) => {
              return(
                <Button
                  Classes={btn.Classes}
                  handleClick={btn.handleClick}
                  style={btn.style}
                  rows={btn.rows}
                  value={btn.value}
                />
              )})
            }
          </tr>
          )})
        }
       </table>
    </div>
  )
}
export default App;