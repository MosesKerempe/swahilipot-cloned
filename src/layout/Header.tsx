import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Menus/Logo';
import AboutMenu from './Menus/AboutMenu';
import DepartmentMenu from './Menus/DepartmentMenu';
import ProgramMenu from './Menus/ProgramMenu';
import BlogLink from './Menus/BlogLink';
import DonateBtn from './Menus/DonateBtn';
import YouthDatabase from './Menus/YouthDatabase';
import MenuCTA from './Menus/MenuCTA';
import ThemeToggle from '@/components/shared/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-dark-color transition-all duration-300 ${
      isScrolled ? 'shadow-md py-2' : 'py-4'
    }`}>
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <AboutMenu />
            <DepartmentMenu />
            <ProgramMenu />
            <Link href="/adverts" className="hover:text-primary dark:hover:text-blue-400">
              Adverts
            </Link>
            
            <Link href="/spfm" className="hover:text-primary dark:hover:text-blue-400">
              SwahiliPotFM
            </Link>
            <BlogLink />
            <YouthDatabase />
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <DonateBtn />
              <MenuCTA />
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <nav className="flex flex-col space-y-4">
              <AboutMenu />
              <DepartmentMenu />
              <ProgramMenu />
              <Link href="/adverts" className="hover:text-primary dark:hover:text-blue-400">
                Adverts
              </Link>
              <Link href="/spfm" className="hover:text-primary dark:hover:text-blue-400">
                SwahiliPotFM
              </Link>
              <BlogLink />
              <YouthDatabase />
              <DonateBtn />
              <MenuCTA />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}