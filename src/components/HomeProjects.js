import React from 'react';

const HomeProjects = ({ classData }) => {

    return (
        <div className={classData}>
            <h2>Projects</h2>
            <ul>
                <li>
                    <p className="title">This web site</p>
                    <a href="#">Code on Github</a>
                </li>
                <li>
                    <p className="title">Sokoban game</p>
                    <a href="https://sokoban.chrisjohannesson.com">Play the game</a>
                    <a href="#">Github</a>
                </li>
            </ul>
        </div>
    )
}

export default HomeProjects;