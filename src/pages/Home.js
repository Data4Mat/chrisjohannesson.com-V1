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
            <div className="home-content-wrapper card">
                <News classData="home-news card" />
                <Advert classData="home-advert card" />
                <Projects classData="home-projects card" />
                <Docs classData="home-docs card" />
                <Links classData="home-links card" />
            </div>
        </div>
    );
};