import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import Home from './Components/Main/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

// online:
// json-server=$ npx json-server -w Data/db.json --port 8000 
// offline
// npm i -g json-server
// npm i json-server
// json-server -w Data/db.json --port 8000


const App = () => {
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  )
}

export default App