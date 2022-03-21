import {Routes, Route} from 'react-router-dom';
import { CartridgesCount } from './pages/CartridgesCount';
import { NotFound } from './pages/NotFound';
import Navigation from './components/Navigation';
import { Printers } from './pages/Printers';
import { Alert } from './components/Alert';


function App()  {
  return (
      <div>
        <Navigation />
        <div className='container-fluid'>
          <div className='raw'>
            <Alert alert={{text: 'text'}} />            
            <Routes>
              <Route path="/" element={<CartridgesCount />} />
              <Route path="/order" element={<Printers />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App