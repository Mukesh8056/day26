
import React from 'react'
import Home from './component/home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './component/Add'
import Delete from './component/Delete';
function App() {
  return (
    <>
      <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Add' element={<Add/>}></Route>
          <Route path='/Delete' element={<Delete/>}></Route>

        </Routes>
      </Router>

      </div>
    </>
  )
}

export default App