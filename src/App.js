import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './css/App.css'
import Browser from "./pages/Browser";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/browser' element={<Browser/>}/>
          <Route path="/collection" element={<Collection/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
