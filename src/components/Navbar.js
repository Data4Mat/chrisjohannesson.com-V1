import React, { useEffect } from 'react';
import { webLogos, webPdf } from '../resources';
import '../styles/navbar.scss';

const Navbar = () => {
  const logo = `${webLogos}/logo.png`;
  const cheatSheet = `${webPdf}/GitGithubCheatSheet.pdf`;
  const resume = `${webPdf}/Resume.pdf`;

  const resetHighlights = () => {
    const elems = document.querySelectorAll('.nav-link');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < elems.length; i++) {
      // eslint-disable-next-line no-unused-expressions
      elems[i].id === 'navbarDropdownMenuLink' || elems[i].id === 'downloads-main'
        ? elems[i].className = 'nav-link dropdown-toggle'
        : elems[i].className = 'nav-link';
      elems[i].removeAttribute('aria-current');
    }
  };

  const highlightPage = (caller) => {
    resetHighlights();
    caller.classList.add('active');
    caller.setAttribute('aria-current', 'page');
  };
  useEffect(() => {
    const url = window.location.pathname.slice(1);
    const elem = url.length > 1
      ? document.querySelector(`a[href="${url}"]`)
      : document.querySelector('#navbarNavDropdown a[href="/"]');
    highlightPage(elem);
  });

  return (
    <div className='navbar-wrapper'>
      <nav className='navbar navbar-expand-sm navbar-light bg-transparent'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img src={logo} alt='Chris Johannesson logo' width='200px' />
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='true' href='/'>Home</a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='about'
                >
                  About
                </a>
              </li>
              <li id='blog' className='nav-item dropdown hover-item'>
                <a
                  className='nav-link dropdown-toggle'
                  id='navbarDropdownMenuLink'
                  href='blog'
                >
                  Blog
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                  <li>
                    <a className='dropdown-item' href='https://webbutveckling.chrisjohannesson.com'>Webbutvecklingsbloggen</a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='https://webdevelopment.chrisjohannesson.com'>The Web Development Blog</a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='projects'>Projects</a>
              </li>
              <li className='nav-item dropdown hover-item'>
                <a
                  className='nav-link dropdown-toggle'
                  id='downloads-main'
                  href='downloads'
                  title='Downloadable documents'
                >
                  Download Docs
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                  <li>
                    <a
                      className='dropdown-item'
                      href={cheatSheet}
                      type='application/pdf'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Git &amp; Github Cheat Sheet
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item'
                      href={resume}
                      type='application/pdf'
                      target='_blank'
                      rel='noreferrer'
                    >
                      My Resume
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
