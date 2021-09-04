import Navbar from '../Navbar/Navbar';
import './Header.css';

export default function Header() {
  return (
    <div className="w-screen filter drop-shadow-sm items-center py-7 px-5 flex justify-around sticky top-0">
      <div className="nav-circle">
        <div className="pt-1.5 garamond text-3xl italic">D</div>
      </div>
      <Navbar />
    </div>
  );
}
