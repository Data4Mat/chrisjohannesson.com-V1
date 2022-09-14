import React from 'react';
import PropTypes from 'prop-types';

const HomeLinks = ({ classData }) => (
  <div className={classData}>
    <h5>Useful Links</h5>
    <div id="link-wrapper" className="link-wrapper">
      <div>
        <p className="title">Social networks</p>
        <ul>
          <li>
            <a href="https://linkedin.com/in/chrisjohdev">LinkedIn profile</a>
          </li>
          <li>
            <a href="https://github.com/chrisjohdev">Github profile</a>
          </li>
          <li>
            <a href="https://gitlab.com/chrisjohdev">GitLab profile</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="title">Documents</p>
        <ul>
          <li>
            <a href="https://resources.chrisjohannesson.com/documents/pdf/GitGithubCheatSheet.pdf">Git &amp; Github Cheat Sheet</a>
          </li>
          <li>
            <a href="https://resources.chrisjohannesson.com/documents/pdf/Resume.pdf">My Resume</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="title">Useful Sites</p>
        <ul>
          <li>
            <a href="https://feltby.se/">Laila Feltby - Designer</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/">Mozilla Developer Network</a>
          </li>
          <li>
            <a href="https://developers.google.com/">Google Developers</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="title">Contact Info</p>
        <ul>
          <li>
            <a href="mailto:info@chrisjohannesson.com">info@chrisjohannesson.com</a>
          </li>
          <li>
            <a href="tel:+46793326745">
              Tel: +46 (0)793 - 32 67 45
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

HomeLinks.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeLinks;
