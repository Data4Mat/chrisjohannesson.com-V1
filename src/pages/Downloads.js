import React from 'react';
import Sheet from '../components/DownloadsCheatSheet';
import '../styles/downloads.scss';

const Downloads = () => (
  <div className='downloads-wrapper'>
    <article>
      <header>
        <h1>Downloads</h1>
      </header>
      <section>
        <Sheet />
      </section>
    </article>
  </div>
);

export default Downloads;
