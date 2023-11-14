import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page2" element={<Page2 />} />
        <Route path="/" element={<Page1 />} />
        <Route path="home" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
