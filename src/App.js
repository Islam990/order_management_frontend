import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
