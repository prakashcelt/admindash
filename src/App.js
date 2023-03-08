// import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"


function App() {
  return (
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/Login' exact element={<Login/>} />
      <Route path='/Profile' exact element={<Profile/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
