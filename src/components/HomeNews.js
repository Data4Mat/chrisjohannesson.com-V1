/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { webPdf } from '../resources';

const HomeNews = ({ classData }) => {
  const resume = `${webPdf}/Resume.pdf`;

  return (
    <div className={classData}>
      <h2>News</h2>
      <ul>
        <li>
          I am the founder and CEO of Data4Mat&trade; AB, a web development and website
          maintenance company focused on delivering stable and sustainable web
          solutions for small and mid-sized organizations. 
          All professional web development and maintenance services are now
          conducted exclusively through&nbsp;
          <a href="https://data4mat.se" target="_blank" rel="noopener noreferrer">
            Data4Mat AB
          </a>.
        </li>

        <li>
          Data4Mat AB is currently in an intensive growth phase following its
          formation. The focus is on building long-term client relationships,
          structured processes, and scalable service offerings within Website-as-a-Service
          (WSaaS) and WordPress-based solutions.
        </li>

        <li>
          This website remains a personal platform presenting my background,
          experience, and technical profile.
        </li>

        <li>
          Design guidance and creative direction for this site were provided
          by my dear friend&nbsp;
          <a href="https://feltby.se/" target="_blank" rel="noopener noreferrer">
            Laila Feltby
          </a>, whose input helped refine and focus the overall visual expression.
        </li>
      </ul>
    </div>
  );
};

HomeNews.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeNews;
