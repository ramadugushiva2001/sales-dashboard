import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Channel from './components/Channel';
import Customers from './components/Customers';
import Home from './components/Home';
import Integrations from './components/Integrations';
import Inventary from './components/Inventary';
import Order from './components/Order';
import Returns from './components/Returns';
import Shipping from './components/Shipping';

const App = () =>(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/inventory" element={<Inventary />} />
          <Route path="/order" element={<Order />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


export default App
npm uninstall @emotion/react @emotion/styled @mui/material @testing-library/user-event
