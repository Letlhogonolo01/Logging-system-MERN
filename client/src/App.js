import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import { ToastContainer } from 'react-toastify';
import React, { useEffect } from 'react';
// import Home from './Components/Home';
import EmpEdit from './Components/EmpEdit';
import EmpDetail from './Components/EmpDetail';
import EmpCreate from './Components/EmpCreate';
import EmpListing from './Components/EmpListing';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/userSlice';
import axios from 'axios';
import { getemployee } from './redux/employeeSlice';


function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    const fetchData = async() => {
        try {
            const response = await axios.get("http://localhost:3001/employee");
            dispatch(getemployee(response.data));
        } catch(err) {
            console.log(err)
        }
       
    }
    fetchData();
  }, [])

  useEffect(()=> {
    const fetchData = async() => {
        try {
            const response = await axios.get("http://localhost:3005");
            dispatch(getUser(response.data));
        } catch(err) {
            console.log(err)
        }
       
    }
    fetchData();
  }, [])


  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/list' element={<EmpListing/>}></Route>
          <Route path='/create' element={<EmpCreate/>}></Route>
          <Route path='/details/:empid' element={<EmpDetail/>}></Route>
          <Route path='/edit/:empid' element={<EmpEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
