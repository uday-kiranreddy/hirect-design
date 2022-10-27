import "./App.css";
import Navbar from "./Navbar";
import Desktop1 from "./Desktop1";
import Desktop2 from "./Desktop2";
import Desktop3 from "./Desktop3";
import Desktop4 from "./Desktop4";
import Desktop5 from "./Desktop5";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./Favourites";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Desktop1 />}/>
        <Route path='/Favourites' element={<Favourites />}/>
        <Route path='/Desktop2' element={<Desktop2 />}/>
        <Route path='/Desktop3' element={<Desktop3 />}/>
        <Route path='/Desktop4' element={<Desktop4 />}/>
        <Route path='/Desktop5' element={<Desktop5 />}/>
      </Routes>
    </Router>
  );
}

export default App;
