// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Car from './Car.js';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


export function Garage() {
  const carName = "Mustang";
  return (
    <>
    <h1>Who lives in my Garage!</h1> 
    <Car brand={ carName }/>
    
    </>
  );
}


export  function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='blogs' element={<Blogs />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

