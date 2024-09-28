
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { AdminAction } from './Pages/AdminAction';
import { Homepage } from './Pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/AdminControll' element={<AdminAction />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
