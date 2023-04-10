import SignIn from "./pages/SingIn";
import Signup from "./pages/SingUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./pages/home";
import { PageUserChampionship } from "./pages/userChampionship";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ChampionshipUser" element={<PageUserChampionship/>}/>
          </Routes>
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
