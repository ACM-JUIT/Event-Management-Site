
import './App.css';
import Events from './pages/Events';
import Navbar from './pages/Navbar';
import Services from './pages/Services';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Addevents from './pages/Addevents';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<About />}   />
      <Route exact path= "/events" element={<Events />}  />
      <Route exact path= "/services" element={<Services />}  />
      <Route exact path= "/addevents" element={<Addevents />}  />
      <Route exact path= "/login" element={<Login />}  />
      <Route exact path= "/signup" element={<Signup />}  />
      <Route exact path= "/profile" element={<Profile />}  />
      
      


      </Routes>
    
     </BrowserRouter> 
  );
}

export default App;
