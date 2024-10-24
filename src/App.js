import './App.css';
// import AboutUs from './componens/AboutUs';
import Textform from './componens/Textform';
import Navbar from './componens/Navbar';
import Alert from './componens/Alert';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App(props) {
  let [mode, setmode] = useState('light') //whether dark mode is enable or not
  let [color, setcolor] = useState('dark')   // me 
  let [name, setname] = useState("dark")     //me


  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  let togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      setcolor('light')    //me
      setname("light")     //me
      document.body.style.backgroundColor = 'rgb(6, 36, 67)'
      showAlert("Dark mode is enabled", "success")

    } else {
      setmode('light')
      setcolor('dark')    //me
      setname("dark")     //me
      document.body.style.backgroundColor = '#ffffff'
      showAlert("Light mode is enabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} color={color} name={name} togglemode={togglemode} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Routes> */}
          {/* <Route exact path="/" element={ <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}></Textform>}>
            </Route> */}
          <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}></Textform>
          {/* <Route exact path="/aboutus" element={ <div className="container my-3">
                <AboutUs></AboutUs>
              </div>}>
            </Route> */}
          {/* </Routes> */}
        </div>
        {/* </Router> */}






    





      </>
      );
}

      export default App;