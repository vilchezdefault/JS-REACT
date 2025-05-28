import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

// Enlaces principales del sitio
const NavbarLinks = [
  { id: 1, title: 'Main', linkR: '#main' },
  { id: 2, title: 'Writers', linkR: '#writers' },
  { id: 3, title: 'Crews', linkR: '#crews' },
];

// Redes sociales
const NavbarSocial = [
  {
    id: 1,
    title: 'Instagram',
    linkR: 'https://www.instagram.com/',
    icon: 'bi bi-instagram',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full shadow-md bg-white-500 bg-opacity-40 backdrop-blur-md z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-4 sm:px-12 py-4">
        {/* Logo */}
        <div>
          {/*<img src={Logo} alt="MainLogo" className="w-[100px]" />*/}
          <h10>Graffiti Costa Rica</h10>
        </div>

        {/* Botón hamburguesa (solo visible en mobile) */}
        <button className="text-black sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegación Desktop */}
        <div className="hidden sm:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-black text-sm sm:text-lg hover:text-sky-200 transform hover:scale-105 transition-transform duration-300 inline-block"
                  href={link.linkR}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes Sociales */}
          <ul className="flex space-x-4">
            {NavbarSocial.map((link) => (
              <li key={link.id}>
                <a
                  href={link.linkR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform transform duration-300 hover:scale-125"
                >
                  <i className={`${link.icon} text-black sm:text-2xl text-lg hover:text-sky-200 transition-all duration-200`} />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Navegación Mobile (cuando isOpen es true) */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 transition-all duration-300" >
          <ul className="flex flex-col space-y-2 border-black justify-center">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="block text-black text-base hover:text-sky-200 transform hover:scale-105 transition-transform duration-300" 
                  href={link.linkR}
                >
                  {link.title}
                </a>
              </li>
            ))}

            {NavbarSocial.map((link) => (
              <li key={link.id}>
                <a
                  href={link.linkR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 transform hover:scale-110 transition-transform duration-200"
                >
                  <i className={`${link.icon} text-black text-xl hover:text-sky-200`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/*MOBILE MENU  */}


    </nav>
  );
};

export default Navbar;