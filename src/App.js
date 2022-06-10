import {Routes, Route} from 'react-router-dom';
import CartridgesCount from './pages/CartridgesCount';
import { NotFound } from './pages/NotFound';
import Navigation from './components/Navigation';
import Printers from './pages/Printers';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import CartridgeContainer from './pages/CartridgeContainer';
import PrinterContainer from './pages/PrinterContainer';

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
              <Route path="/printers" element={<Printers />} />
              <Route path="/printer/:id" element={<PrinterContainer />} />
              <Route path="/cartridge" element={<CartridgeContainer />} />
              <Route path="/cartridge/:id" element={<CartridgeContainer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </AlertState>
  );
}

export default App