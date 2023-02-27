import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import Navigation from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import SearchBar from './components/SearchBar';


function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(null);

  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
      <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path="/search" element={<SearchBar/>} />
            <Route path="/" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
