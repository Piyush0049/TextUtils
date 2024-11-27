import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = ()=>{
    if(mode === "light"){
      setmode("dark")
    }
    else{
      setmode("light")
    }
  }
  const [col, setcol] = useState("black");
  const change = ()=>{
    if(col === "black"){
      setcol("white")
    }
    else{
      setcol("black")
    }
  }
  return (
    <>   
      <Router>
        <Navbar title='Textutils' mode={mode}/>
        <div className='container my-8'>
          <Routes>
            <Route exact path='/about' element={<About sol= {change}/>} />
            <Route exact path='/' element={<Textform heading="Enter the Text" toggle = {togglemode} />} />
          </Routes>
        </div>
      </Router> 
    </>   
  );
}

export default App;

