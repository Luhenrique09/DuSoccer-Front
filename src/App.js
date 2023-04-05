import SignIn from "./pages/SingIn";
import Signup from "./pages/SingUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import  AddChampionship  from "./pages/addChampionship";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addChampionship" element={<AddChampionship />} />
          </Routes>
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
