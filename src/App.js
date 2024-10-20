import './App.css';
// import AboutUs from './componens/AboutUs';
import Textform from './componens/Textform';
import Navbar from './componens/Navbar';


function App(props) {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below"></Textform>
      </div>
      {/* <div className="container my-3">
        <AboutUs></AboutUs>
      </div> */}






    </>
  );
}

export default App;