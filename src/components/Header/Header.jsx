import Navbar from '../Navbar/Navbar';
import './Header.css';

export default function Header() {
  return (
    <div className="w-screen filter drop-shadow-sm items-center py-5 px-5 flex justify-around">
      <h3>Logo goes here</h3>
      <Navbar />
    </div>
  );
}
