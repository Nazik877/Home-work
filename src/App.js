import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';

import Layout from './layout/Layout';





function App() {
  return (
    <div className="App">
  <Layout/>
     <Routes>
    
    
    
   
      <Route path='/mainpage' element={<MainPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
    </div>
  );
}

export default App;
