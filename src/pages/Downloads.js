import React from 'react';
import CV from '../components/DownloadsResume';
import Sheet from '../components/DownloadsCheatSheet';
import "../styles/downloads.scss";

export const Downloads = () => {
    return (
        <div className="downloads-wrapper">
            <article>
                <header>
                    <h1>Documents for download</h1>
                </header>
                <section>
                    <CV />
                    <Sheet />
                </section>
            </article>
        </div>
    );
};