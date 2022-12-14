

import './App.css';
import './style/main.css';
import React, { useEffect, useState } from "react";
import "./style/main.css";
import "bootstrap-css-only/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Recognition from './Pages/Recognition';
import Login from './Pages/Login';
import NavbarHeader from './Components/NavbarHeader';
import { ProjectUrl } from './constants';
import NewEvent from './Pages/NewEvent';
import NewMove from './Pages/NewMove';

function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/login" 
                  element={
                    <>
                        {Login()}
                    </>
                  }
              />
              <Route path="/" 
                  element={
                    <>
                        {NewEvent()}
                    </>
                  }
              />
              <Route path="/move" 
                  element={
                    <>
                        {NewMove()}
                    </>
                  }
              />

            </Routes>

          </BrowserRouter>
    </>
  );
}

export default App;
