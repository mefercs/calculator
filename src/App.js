import {useState} from 'react'

function App() {

  return (
    
    <div className="App">
      <Calculator  />    
    </div>
  );
}

const numbers = ['one','two','three','four','five','six','seven','eight','nine']

const Calculator = () => { 

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState('')

  const buttonNumbers = numbers.map( (e, index) => <button key={e} onClick={() => addCalc( (index+1).toString())}>{index+1}</button> )
  const ops = ['-','*','/','+']

  const addCalc = value => { 
    if( (ops.includes(value) & calc==='' & value!=='-') || (ops.includes( calc.slice(-1)) & ops.includes(value) || (value==='0' & calc==='')) ){
      return
    }
    setCalc( p => p + value )
    if( ops.includes( value) ){
      return
    }
    setResult(eval(calc + value).toString())
  }

  const delLast= ()=> { 
    const newCalc = calc.slice(0,-1)
    setCalc(newCalc)
    if( ops.includes(newCalc.slice(-1))) {
      return
    }
    setResult(eval( newCalc ))
  }
  const handleResult = () =>{ 
    const result = eval(calc)
    setCalc(result.toString())
    setResult(result)
  }


  return ( <div className='calculator'>

    <p className="display">{ result &&  <>({result})</> } {calc}</p>

    <div className="operators">
      <button onClick={() => addCalc("-")} className="subtract">-</button>
      <button onClick={() => addCalc("*")} className="multiply">x</button>
      <button onClick={() => addCalc("/")} className="divide">/</button>
      <button onClick={() => addCalc("+")} className="add">+</button>
      <button onClick={delLast} className="clear">DEL</button>
    </div>
    
    {buttonNumbers}

    <button onClick={() => addCalc("0")} className="zero">0</button>
    <button className="decimal">.</button>
    <button onClick={handleResult} className='equals'>=</button>

  </div> )
}


export default App;
