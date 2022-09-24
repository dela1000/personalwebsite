import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from 'contexts/context';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import styles from './Layout.module.css';

import { ChildrenTypes, UseAppContext } from 'types/types';

export default function Layout({ children }: ChildrenTypes): ReactNode {
  const {
    sharedState: { themeName }
  }: UseAppContext = useAppContext();
  const router = useRouter();

  const navigateHome = () => {
    router.push('/');
  };

  return (
    <div id="top" className={themeName}>
      <header
        id="header"
        className={`${
          themeName === 'dark' ? 'dark-header dark' : 'light-header light'
        }  py-7 px-5 flex justify-around sticky top-0 z-50`}
      >
        <button
          type="button"
          className={`${
            themeName === 'dark' ? styles['dark-nav-circle'] : styles['light-nav-circle']
          } ${styles['nav-circle']}`}
          onClick={navigateHome}
        >
          <div className="garamond text-3xl italic">D</div>
        </button>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}
