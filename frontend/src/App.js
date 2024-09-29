
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Admin } from './Pages/Admin/Admin';
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
          <Route path='/Admin/*' element={<Admin/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
