import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { context, globalReducer, initialState } from "./store"
import { useReducer } from "react"


function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <context.Provider>
          <AllComponents />
        </context.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
