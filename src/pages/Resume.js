import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { webPdf } from '../resources';
import '../styles/resume.scss';



// const options = {
//     cMapUrl: 'cmaps/',
//     cMapPacked: true,
//     standardFontDataUrl: 'standard_fonts/',
// };

export const Resume = () => {
    const resume = require(webPdf + '/Resume.pdf');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const urlResume = webPdf + '/Resume.pdf';

    useEffect(() => {
        const nextBtn = document.querySelector(".resume-pdf-file .nextBtn");
        const prevBtn = document.querySelector(".resume-pdf-file .prevBtn");
        pageNumber === numPages
            ? nextBtn.setAttribute("disabled", true)
            : nextBtn.removeAttribute("disabled");

        pageNumber < 2
            ? prevBtn.setAttribute("disabled", true)
            : prevBtn.removeAttribute("disabled");
    }, [pageNumber])

    const setSizeCanvas = () => {
        const parent = document.querySelector(".react-pdf__Page");
        const width = parent.clientWidth;
        console.log("width", width);
        const canvas = document.querySelector(".react-pdf__Page");
        console.log("canvas", canvas.children[0]);
        // canvas.style.width = width;

    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const onNextHandler = () => {
        pageNumber < numPages && setPageNumber(pageNumber + 1);
    }
    const onPreviousHandler = () => {
        pageNumber > 1 && setPageNumber(pageNumber - 1);
    }

    window.addEventListener('load', (ev) => {
        console.log("window", ev);
        setSizeCanvas();
    });

    return (
        <div className="resume-pdf-file">
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="pagination">
                <div>
                    <input type="button" onClick={onPreviousHandler} className="btn prevBtn" value="< Prev" />
                </div>
                <div><a href={urlResume} target="_blank" coors>
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