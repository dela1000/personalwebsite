import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { ThemeContext } from '../../contexts/theme';

export default function Header() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <header
      id="top"
      className={`${themeName}-header w-screen filter items-center py-7 px-5 flex justify-around sticky top-0`}
    >
      <div className="nav-circle">
        <div className="pt-1.5 garamond text-3xl italic">D</div>
      </div>
      <Navbar />
    </header>
  );
}
