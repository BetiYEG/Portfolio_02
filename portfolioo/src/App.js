import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/Intro.js";
import Skills from "./component/Skills/Skills";
import Works from "./component/Works/works";
import Service from "./component/Services/service";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Service/>
      <Contact/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
