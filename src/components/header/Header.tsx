import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const getActiveLinkClassName = (isActive: boolean) => (isActive ? 'link link--active' : 'link');

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <nav className="navigation">
              <NavLink to="/" className={({ isActive }) => getActiveLinkClassName(isActive)}>Home</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
