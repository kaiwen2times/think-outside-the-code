import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DangerouslySetInnerHTML from './dangerouslySetInnerHTML';
import Root from './Root';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dangerouslySetInnerHTML">DangerouslySetInnerHTML</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/dangerouslySetInnerHTML" element={<DangerouslySetInnerHTML />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
