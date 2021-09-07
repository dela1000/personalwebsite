import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { Context } from '../../contexts/context';

export default function Header() {
  const [{ themeName }] = useContext(Context);
  return (
    <header
      id="header"
      className={`${themeName}-header w-screen items-center py-7 px-5 flex justify-around sticky top-0 z-50`}
    >
      <div className={` ${themeName}-nav-circle nav-circle`}>
        <div className="pt-1.5 garamond text-3xl italic">D</div>
      </div>
      <Navbar />
    </header>
  );
}
