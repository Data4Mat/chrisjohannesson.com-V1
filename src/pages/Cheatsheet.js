import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { webPdf } from '../resources';
import '../styles/cheatsheet.scss';

// import cheatSheet from webPdf + '/GitGithubCheatSheet.pdf';

// const options = {
//     cMapUrl: 'cmaps/',
//     cMapPacked: true,
//     standardFontDataUrl: 'standard_fonts/',
// };

export const Cheatsheet = async () => {
    const cheatSheet = await require(webPdf + '/GitGithubCheatSheet.pdf');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const urlCheatSheet = webPdf + '/GitGithubCheatSheet.pdf';


    useEffect(() => {
        const nextBtn = document.querySelector(".pdf-file .nextBtn");
        const prevBtn = document.querySelector(".pdf-file .prevBtn");
        pageNumber === numPages
            ? nextBtn.setAttribute("disabled", true)
            : nextBtn.removeAttribute("disabled");

        pageNumber < 2
            ? prevBtn.setAttribute("disabled", true)
            : prevBtn.removeAttribute("disabled");
    }, [pageNumber])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const onNextHandler = () => {
        pageNumber < numPages && setPageNumber(pageNumber + 1);
    }
    const onPreviousHandler = () => {
        pageNumber > 1 && setPageNumber(pageNumber - 1);
    }

    return (
        <div className="pdf-file">
            <Document file={cheatSheet} onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="pagination">
                <div>
                    <input type="button" onClick={onPreviousHandler} className="btn prevBtn" value="< Prev" />
                </div>
                <div><a href={urlCheatSheet} target="_blank">
                    Download
                </a>
                </div>
                <div>
                    <input type="button" onClick={onNextHandler} className="btn nextBtn" value="Next >" />
                </div>
            </div>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )
}