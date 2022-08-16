import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";


function App() {
  return (
    <div className="">
    <Navbar/>
    <Home/>
    <Social/>
    <About/>
    <Portfolio/>
    </div>
  );
}

export default App;
