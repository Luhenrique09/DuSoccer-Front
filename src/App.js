import SignIn from "./pages/SingIn";
import Signup from "./pages/SingUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
