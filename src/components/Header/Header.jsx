import { useContext } from 'react';
import { Context } from 'contexts/context';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import './Header.css';

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  const [{ themeName }] = useContext(Context);

  const navigateHome = () => {
    if (location.pathname !== '/') {
      history.push(`/home`);
    }
  };

  return (
    <header
      id="header"
      className={`${themeName}-header py-7 px-5 flex justify-around sticky top-0 z-50`}
    >
      <button
        type="button"
        className={` ${themeName}-nav-circle nav-circle`}
        onClick={navigateHome}
      >
        <div className=" garamond text-3xl italic">D</div>
      </button>
      <Navbar />
    </header>
  );
}
