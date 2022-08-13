import React from 'react';

const HomeNews = ({ classData }) => {
    return (
        <div className={classData}>
            <h2>News</h2>
            <ul>
                <li>
                    Just launched this complete re-build of my website. Everything is new from design to code. I used React and Bootstrap here while the old one was in plain JavaScript and Bulma. You're welcome to email me your thoughts about it on <a href="mailto:info@chrisjohannesson.com" className="social-icon si-rounded si-small si-linkedin">info@chrisjohannesson.com</a>. Looking forward to your comments.
                </li>
                <li>
                    I'm working on a Swedish language blog about Web development (Webbutveckling) that will be launched sometime towards the end of 2022 if everything goes according to plan.
                </li>
                <li>
                    There will also be an English language version of the same blog that will be launched around the same time.
                </li>
                <li>
                    Work on a podcast focusing on the basics of web development and intended as a help for students studying web design, development, or programmiing is also planned.
                </li>
                <li>
                    There will be a Swedish language version of the podcast too.
                </li>
            </ul>
        </div>
    )
}

export default HomeNews;