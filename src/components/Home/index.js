import Dashboard from '../Dashboard';
import Menuitems from '../Menuitems';
import './index.css';

const Home =()=> (
      <div className="home-container">
        <Menuitems />
        <div>
        <h1>Dashboard</h1> 
          <Dashboard />
        </div>
      </div>
    );

export default Home;
