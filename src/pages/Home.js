import React from 'react';
import '../styles/home.scss';
import News from '../components/HomeNews';
import Advert from "../components/HomeMyAdvert";
import Helo from '../components/HeloSection';

export const Home = () => {
    return (
        <div className="home-wrapper">
            <h1>Welcome</h1>
            <Helo />
            <div className="home-content-wrapper">
                <News classData="home-1" />
                <Advert classData="home-2" />
                <div className="home-3">Projects</div>
                <div className="home-4">Documents</div>
                <div className="home-5">Links</div>
            </div>
        </div>
    );
};