import './App.css'

function App() {

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
            <h2>0</h2>
          </td>
        </tr>

         {/*SECOND ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>C</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>/</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>*</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>-</button>
          </td>
        </tr>

         {/*THIRD ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>7</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>8</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>9</button>
          </td>
          <td rowSpan={2}>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'
             style={{height:"85px"}}>+</button>
          </td>
        </tr>

         {/*FOURTH ROW */}
        <tr>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>4</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>5</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>6</button>
          </td>
        </tr>

        {/*FIFTH ROW */}
        <tr>
          <td>
            <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>1</button> 
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>2</button>
          </td>
          <td>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'>3</button>
          </td>
          <td rowSpan={2}>
          <button 
             tipe='button' 
             className='btn btn-info w-75 mt-2'
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
             className='btn btn-info w-75 mt-2'>.</button>
          </td>
        </tr>

      </table>
    </div>
  )
}

export default App;