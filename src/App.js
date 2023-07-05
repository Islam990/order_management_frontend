import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Error from './Components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './Security/AuthContext';
import { useAuth } from "./Security/AuthContext";
import { Navigate } from 'react-router-dom';


function App() {

  function AuthentactedRoute({ children }) {
    const authContect = useAuth();
    if (authContect.isAuthentacted)
      return children;

    return <Navigate to="/" />
  }


  return (
    < div className="App" >

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login></Login>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/dashboard/:userName' element={<AuthentactedRoute><Dashboard></Dashboard> </AuthentactedRoute>} />
            <Route path='*' element={<Error></Error>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
