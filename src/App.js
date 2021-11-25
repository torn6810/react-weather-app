//import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Weather App
        </h1>  
        <Weather/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
