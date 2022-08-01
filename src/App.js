import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className='page-wrapper'>
            <Navbar />
            <div className="content-wrapper">
                Home
            </div>
            <Footer />
        </div>
    )
}

export default App;