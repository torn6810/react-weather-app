//import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>
          React Weather App
        </h1>  
        <Weather city="Seattle"/>
      </header>
      <Footer />
      </div>
    </div>
  );
}

export default App;
