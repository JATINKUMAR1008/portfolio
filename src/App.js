import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";


function App() {
  return (
    <div className="">
    <Navbar/>
    <Home/>
    
    <About/>
    <Portfolio/>
    <Experience/>
    
    <Social/>
    </div>
  );
}

export default App;
