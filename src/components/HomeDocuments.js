/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const HomeDocuments = ({ classData }) => (
  <div className={classData}>
    <h2>Documents</h2>
    <div>
      <h5>Git &amp; Github Cheat Sheet</h5>
      <p>
        During my time at Linnaeus University, I developed a Git and GitHub
        Cheat Sheet to support fellow students who were getting started with
        version control. It was created as a concise, practical reference
        covering essential commands and common workflows to make everyday
        usage clearer and more structured. I hope it can be useful for others too.
        <span className='copyright'>It&apos; s free to use and distribute as you please, but I would appreciate if you keep the contributions in any copies you distribute.</span>
      </p>
      <a href='https://resources.chrisjohannesson.com/documents/pdf/GitGithubCheatSheet.pdf'>Cheat Sheet</a>
    </div>
  </div>
);

HomeDocuments.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeDocuments;
