/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const HomeDocuments = ({ classData }) => (
  <div className={classData}>
    <h2>Documents</h2>
    <div>
      <h5>Git &amp; Github Cheat Sheet</h5>
      <p>
        This is a little document I put together to help my clasmates using Git and Github. I hope it can be useful for others too.
        <span className='copyright'>It&apos; s free to use and distribute as you please, but I would appreciate if you keep the contributions in any copies you distribute.</span>
      </p>
      <a href='https://resources.chrisjohannesson.com/documents/pdf/GitGithubCheatSheet.pdf'>Cheat Sheet</a>
    </div>
    <div>
      <h5>Resume - Chris Johannesson</h5>
      <p>My resume available as a pdf file for download.</p>
      <a href='https://resources.chrisjohannesson.com/documents/pdf/Resume.pdf'>Resume - Chris Johannesson</a>
    </div>
  </div>
);

HomeDocuments.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeDocuments;
