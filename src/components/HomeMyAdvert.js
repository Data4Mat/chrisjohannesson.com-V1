/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const HomeMyAdvert = ({ classData }) => (
  <div className={classData}>
    <h2>Thinking about a website?</h2>

    <p>
      If you are planning to launch, upgrade, or restructure a website for your business,
      association, or organization, all professional web development and website maintenance
      services are provided through Data4Mat AB.
    </p>

    <p>
      Data4Mat AB focuses on stable, secure, and sustainable web solutions for small and
      mid-sized organizations. A modern website is a core business asset that supports
      communication, visibility, trust, and long-term brand positioning.
    </p>

    <p>
      For services, pricing, and contact details, please visit&nbsp;
      <a href="https://data4mat.se" target="_blank" rel="noopener noreferrer">
        Data4Mat AB
      </a>
      .
    </p>
  </div>
);

HomeMyAdvert.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeMyAdvert;
