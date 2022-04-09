
import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';
import Employee from './Components/Employee';
import Navbar from './Components/Navbar';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/employee' element={<Employee/>}/>
      <Route path='/employee/id' element={<EmployeeDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
