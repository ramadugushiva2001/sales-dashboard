import { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const menuItems = [
  { name: "Dashboard", path: '/' },
  { name: 'Inventory', path: '/inventory' },
  { name: 'Integrations', path: '/integrations' },
  { name: 'Orders', path: '/order' },
  { name: 'Returns', path: '/returns' },
  { name: 'Customers', path: '/customers' },
  { name: 'Shipping', path: '/shipping' },
  { name: 'Channels', path: '/channel' },
  { name: 'Calculators', path: '/calculators' },
  { name: 'Reports', path: '/reports' },
  { name: 'Account', path: '/account' }
];

class MenuItems extends Component {
  state = { activeMenuItem: menuItems[0].name };

  handleMenuItemClick=(name)=> {
    this.setState({ activeMenuItem: name });
  }

  render() {
    const { activeMenuItem } = this.state;  

    return (
      <div className="menu-items-container">
        <ul className="menu-items-list">
          {menuItems.map((item, index) => (
            <li key={index} className={activeMenuItem === item.name ? 'active' : ''}>
              <Link
                to={item.path}
                className={activeMenuItem === item.name ? 'link-item active' : 'link-item'}
              > 
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuItems;
