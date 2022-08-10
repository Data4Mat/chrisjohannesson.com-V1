import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { Blog } from '../pages/Blog';
import { Downloads } from '../pages/Downloads';
import { Cheatsheet } from '../pages/Cheatsheet';
import { Resume } from '../pages/Resume';

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/cheatsheet" element={<Cheatsheet />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    )
};