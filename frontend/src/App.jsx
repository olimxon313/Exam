import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'



function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
          <AllComponents />
      </BrowserRouter>
    </>
  )
}

export default App
