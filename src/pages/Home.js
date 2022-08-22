import React from 'react';
import '../styles/home.scss';
import News from '../components/HomeNews';
import Advert from "../components/HomeMyAdvert";
import Helo from '../components/HeloSection';
import Projects from '../components/HomeProjects';
import Docs from '../components/HomeDocuments';
import Links from '../components/HomeLinks';

export const Home = () => {
    return (
        <div className="home-wrapper">
            <h1>Welcome</h1>
            <Helo />
            <div className="home-content-wrapper">
                <News classData="home-news" />
                <Advert classData="home-advert" />
                <Projects classData="home-projects" />
                <Docs classData="home-docs" />
                <Links classData="home-links" />
            </div>
        </div>
    );
};