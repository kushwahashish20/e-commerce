import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Header/Home';
import Navigation from './Component/Header/Navigation';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Admin from './Component/Admin';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation></Navigation>
      <div className="container-fluid">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/admin" element={<Admin />} />
      </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
