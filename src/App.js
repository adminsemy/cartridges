import './App.css';
import {Routes, Route} from 'react-router-dom';
import { CartridgesCount } from './pages/CartridgesCount';
import { CartridgesOrder } from './pages/CartridgesOrder';
import { NotFound } from './pages/NotFound';
import Navigation from './components/Navigation';

function App()  {
  return (
      <div>
        <Navigation />
        <div className='container-fluid'>
          <div className='raw'>
            <Routes>
              <Route path="/" element={<CartridgesCount />} />
              <Route path="/order" element={<CartridgesOrder />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App