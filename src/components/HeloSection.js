import React from 'react';
import { webImages } from '../resources';
import '../styles/heloSection.scss';

const HeloSection = () => {
  const helo = `${webImages}/bg_helo.jpg`;
  return (
    <div className='helo-section-wrapper'>
      <img id='helo-image' src={helo} alt='Fort Nepean road as seen from helicopter, Australia' style={{ width: '100%' }} />
      <div className='helo-text-section'>
        <h2>Chris Johannesson</h2>
        <div>
          <div className='helo-text'>
            <p>Web Systems Developer</p>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Object-Oriented Development (Java / C#)</li>
              <li>Databases</li>
              <li>Containerized Environments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeloSection;
