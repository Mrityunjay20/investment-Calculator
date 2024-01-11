import DataInput from "./components/DataInput.jsx"
import Header from "./components/Header.jsx"
import { useState } from "react"
import Results from "./components/Results.jsx";



function App() {
  const [initialValue, setValue] = useState({
    initialInvestment: 10000,
    annualInvestment:300,
    expectedReturn:5.5,
    duration:12
});

const inputIsValid = initialValue.duration >= 1;
function handleOnChange(inputIndentifier,newValue){
    console.log(initialValue);
    setValue(prevInput =>{
        return {
            ...prevInput,
            [inputIndentifier]: +newValue
        }
    });
    console.log("a4 change" + {...initialValue})
}
  return (<>
      <Header/>
      <DataInput 
        initialValue={initialValue} 
        handleOnChange={handleOnChange}/>
        {!inputIsValid ? <p className="center">Please enter values greater than 0</p> : undefined}
      {inputIsValid && <Results 
        input={initialValue}
        />}
    </>
  )
}

export default App
