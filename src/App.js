import SignIn from "./pages/SingIn";
import Signup from "./pages/SingUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </Router>
      </UserProvider>

    </>
  );
}

export default App;
