import {Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';

function App() {

  return ( 
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/Login' element={<LoginPage/>} />
      <Route path='/SignUp ' element={<SignUpPage/>} />
    </Routes>
    
  
  );
}

export default App
 