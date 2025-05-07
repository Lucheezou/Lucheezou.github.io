import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Presentations from '../components/Presentations';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/presentations" element={<Presentations />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;