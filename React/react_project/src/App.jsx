import { useState } from "react"

function App() {

  const[count, setCount] = useState(0);

  function CustomButton(state){
    
    function onclickHandler(){
      state.setCount(count + 1);
    }

    return <button onClick={onclickHandler}>counter {state.count} </button>
  }
  
  return (
    <div>
      <CustomButton count = {count} setCount = {setCount}></CustomButton>
    </div>
  )
}

export default App
