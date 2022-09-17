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
          If you are looking to hire a Web/JavaScript developer you find my contact information&nbsp;
          <a href='contact'>here</a>
          &nbsp;and my CV is available&nbsp;
          <a href={resume}>here</a>
          .
        </li>
        <li>
          Just launched this complete re-build of my website. Everything is new from design to the code-base. My good friend&nbsp;
          <a href='https://feltby.se/'>Laila Feltby</a>
          &nbsp;was a great help reeling in my wild design ideas and put me on track again. So thank you for your invaluable help.
        </li>
        <li>
          I&apos;m working on a Swedish language blog about Web development&nbsp;
          <em>(Webbutveckling)</em>
          &nbsp;that will be launched sometime towards the end of 2022 if everything goes according to plan.
        </li>
        <li>
          There will also be an English language version of the same blog that will be launched around the same time.
        </li>
        <li>
          Work on a podcast focusing on the basics of web development and intended as a help for students studying web design, development, or programming is also planned.
        </li>
        <li>
          There will be a Swedish language version of the podcast too.
        </li>
      </ul>
    </div>
  );
};

HomeNews.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeNews;
