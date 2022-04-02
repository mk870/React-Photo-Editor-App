import Editor from "./Components/Editor";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Errorpage from "./Components/Errorpage";
import Footer from "./Components/Footer"
import { Globalstyles } from "./styles/GlobalStyles";

function App() {
  
  return (
    <BrowserRouter>
      <Globalstyles/>
      <div className="container"> 
      <Navbar/>
      
      <Routes>
          
        <Route path="/" element={<Home/>}/>
        <Route path="/editor" element={<Editor/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="*" element={<Errorpage/>}/>
          
      </Routes>
      
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
