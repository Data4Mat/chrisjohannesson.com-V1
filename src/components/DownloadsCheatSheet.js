/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { webPdf } from '../resources';

const DownloadsCheatSheet = () => {
  const url = `${webPdf}/GitGithubCheatSheet.pdf`;
  return (
    <div id="cheatSheetDownload" className="card">

      <h6><a href={url}>Git &amp; Github Cheat Sheet</a></h6>
      <p>
        A simple cheat sheet I put together for the students in my class in a previous course I took. It's free to distribute and there are referneces to a free pdf book that I used to create the cheat sheet. It's highly recomended.
      </p>
    </div>
  );
};

export default DownloadsCheatSheet;
