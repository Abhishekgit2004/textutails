import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct import

import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // const [model, setModel] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (cls) => {
    
      // Remove previous background classes
      document.body.classList.remove('bg-primary', 'bg-danger', 'bg-success' , 'bg-warning');
    
      // Add the new background class
      document.body.classList.add(`bg-${cls}`);
    
    
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'cyan';
      showAlert("Dark mode is enabled", "success");
      document.title = "Dark Mode Enabled";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark mode is disabled", "success");
      document.title = "Text Conversion";
    }
  }

  // const colorRed = () => {
  //   if (model === 'light') {
  //     setModel('red');
  //     document.body.style.backgroundColor = 'red';
  //     document.body.style.color = 'blue';
  //     showAlert("Dark red mode is enabled", "success");
  //   } else {
  //     setModel('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = '#c06c84';
  //     showAlert("Dark red mode is disabled", "success");
  //   }
  // }

  return (
    <>
      <div className="container my-3">
        <BrowserRouter>
          <Navbar
            title="Abhishek"
            mode={mode}
            toggleMode={toggleMode}
            abhi={mode === 'light' ? "Enable dark mode" : "Disable dark mode"}
          />
                <Alert alert={alert} />

          <Routes>
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/' element={<Textform heading="Enter your text"
              mode={mode}
              showAlert={showAlert}
              alert={alert}
            />} />
            {/* Add more routes as needed */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
