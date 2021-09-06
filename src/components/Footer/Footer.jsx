import { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../contexts/theme';

export default function Footer() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <footer
      id="top"
      className={`${themeName}-header w-screen items-center py-7 flex justify-around sticky`}
    >
      Im a footer
    </footer>
  );
}
