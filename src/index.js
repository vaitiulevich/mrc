import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import CenterResurses from './pages/CenterResurs/CenterResurses';
import Test from './pages/Test/Test';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<CenterResurses/>} />
          <Route path='/test' element={<Test/>} />
          {/* <Route path='/free-courses' element={<FreeCours/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routing />
);