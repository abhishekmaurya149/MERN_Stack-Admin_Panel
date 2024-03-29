import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Logout from "./pages/Logout";
import Footer from '../src/components/Footer/Footer'



const App = () => {
  return (
<>
<Router>
  <Navbar />
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/service" element={<Services/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/logout" element={<Logout />}/>
</Routes>
<Footer />
</Router>
</>
  )
}

export default App;