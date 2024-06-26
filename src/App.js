import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* use 'exact path' to make sure the path is not partially matched
          or else:
          /users---->component 1
          /users/home---->component 1 instead of component 2 that you were expecting */}
          {/* <Route exact path="/about" element={<About />}> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}> */}
          {/* </Route> */}
        {/* </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
