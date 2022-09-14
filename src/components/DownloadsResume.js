import React from 'react';
import { webPdf } from '../resources';

const DownloadsResume = () => {
  const url = `${webPdf}/Resume.pdf`;
  return (
    <div id="resumeDownload" className="card">
      <h6><a href={url}>My Resume / CV</a></h6>
      <p>
        My present CV as a pdf file available to download.
      </p>
    </div>

  );
};

export default DownloadsResume;
