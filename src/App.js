import {Routes, Route} from 'react-router-dom';
import CartridgesCount from './pages/CartridgesCount';
import { NotFound } from './pages/NotFound';
import Navigation from './components/Navigation';
import { Printers } from './pages/Printers';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import Cartridge from './pages/Cartridge';

function App()  {
  return (
    <AlertState>
      <div>
        <Navigation />
        <div className='container-fluid'>
          <div className='raw'>
            <Alert/>            
            <Routes>
              <Route path="/" element={<CartridgesCount />} />
              <Route path="/order" element={<Printers />} />
              <Route path="/cartridge" element={<Cartridge />} />
              <Route path="/cartridge/:id" element={<Cartridge />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </AlertState>
  );
}

export default App