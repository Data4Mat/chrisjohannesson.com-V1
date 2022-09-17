import React from 'react';
import PropTypes from 'prop-types';

const HomeProjects = ({ classData }) => (
  <div className={classData}>
    <h2>Projects</h2>
    <div className='project-list'>
      <ul>
        <li>
          <p className='title'>This web site</p>
          <a href='https://github.com/Data4Mat/chrisjohannesson.com-V1'>Code on Github</a>
        </li>
        <li>
          <p className='title'>Sokoban game</p>
          <a href='https://sokoban.chrisjohannesson.com'>Play the game</a>
          <a href='https://github.com/pub-education/pub-ED-sokoban'>Github</a>
        </li>
        <li>
          <p className='title'>Website IGP</p>
          <a href='https://web.archive.org/web/20080315012651/http://igp.ph/Default.aspx?AspxAutoDetectCookieSupport=1'>Snap shot from archive.org 2008</a>
          <a href='https://github.com/ChrisJohDev/igp-website'>Github</a>
        </li>
      </ul>
      <ul>
        <li>
          <p className='title'>Website maverick-web</p>
          <a href='https://github.com/ChrisJohDev/maverick-web'>Github</a>
        </li>
        <li>
          <p className='title'>Website chris.maverick-web</p>
          <a href='https://github.com/ChrisJohDev/chris-maverick-website'>Github</a>
        </li>
      </ul>
    </div>

  </div>
);

HomeProjects.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeProjects;
