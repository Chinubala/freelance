import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Registration from './Components/Registration';
import DashBoard from './Components/Dashboard'
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Profile />}></Route>
          <Route exact path='/registration' element={<Registration />}></Route>
          <Route exact path='/dashboard' element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
