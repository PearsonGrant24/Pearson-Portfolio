import RoutePath from './routes/RoutePath.tsx';
import './assets/App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Navbar.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutePath />
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
