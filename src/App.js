import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routing } from './components/Routing';
import './styles/app.scss';

const resume_url = "https://resources.chrisjohannesson.com/documents/pdf/Resume.pdf";
const cheatSheet_url = "https://resources.chrisjohannesson.com/documents/pdf/"

const App = () => {
    return (
        <div className='page-wrapper'>
            <Navbar />
            <div className="page-content-wrapper">
                <div className="content-wrapper">
                    <aside className="googleads-left"></aside>
                    <main>
                        <Routing />
                    </main>
                    <aside className="googleads-rigth"></aside>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;