import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import Home from './Components/Main/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// online:
// json-server=$ npx json-server -w Data/db.json --port 8000 
// offline
// npm i -g json-server
// npm i json-server
// json-server -w Data/db.json --port 8000


const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Header logo='Blog'/>
      <Main/>
      
    </div>
    </BrowserRouter>
  )
}

export default App