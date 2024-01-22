/** @format */

import { Routes, Route } from 'react-router-dom';
import { Footer, NavBar } from './components';
import {
  Home,
  Contact,
  Kalender,
  Bestuur,
  /* Archief, */
  Motto,
  NotFound,
} from './pages';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/kalender' element={<Kalender />} />
        <Route path='/bestuur' element={<Bestuur />} />
        <Route path='/motto' element={<Motto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
