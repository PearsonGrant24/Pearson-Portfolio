import React, {useEffect} from 'react';
import RoutePath from './routes/RoutePath.tsx';
import './assets/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Header from './components/header/Navbar.tsx';


const App = () => {
    
    return (
    
      <BrowserRouter>
          <Header/>
          {/* <Header/ */}
          {/* <Route path = '/' element={() => <Home/>} /> */}
          <RoutePath />
          
          {/* <Footer/> */}
        
          </BrowserRouter>
    
  );
  
}

export default App;
