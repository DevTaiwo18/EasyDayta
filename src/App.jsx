import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword ';
import CreatePin from './pages/CreatePin';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/createPin" element={<CreatePin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
