import React from "react";
import "../styles/projects.scss";

export const Projects = () => {
    return (
        <article id='projects'>
            <header>
                <h1>Projects</h1>
            </header>
            <section>
                <div className='card'>
                    <h5>
                        This web site -{" "}
                        <a href='https://chrisjohannesson.com'>ChrisJohannesson.com</a>
                    </h5>
                    <p>
                        This site was built on React and Bootstrap as foundation. Then I
                        modified the styles to fit my site and used Sass for style sheets.
                    </p>
                    <p>
                        <a href='https://github.com/Data4Mat/chrisjohannesson.com-V1'>Code on GitHub</a>
                    </p>
                </div>
                <div className='card'>
                    <h5>Sokoban Game</h5>
                    <p>
                        This is my version of the popular{" "}
                        <a href='https://sokoban.chrisjohannesson.com'>Sokoban</a> game. It
                        was an assignment in a course I took. A fully working sample of it
                        is available online at{" "}
                        <a href='https://sokoban.chrisjohannesson.com'>
                            https://Sokoban.ChrisJohannesson.com
                        </a>
                    </p>
                    <p>
                        Sokoban was created in 1981 by Hiroyuki Imabayashi.The first
                        commercial game was published in December 1982 by Thinking Rabbit, a
                        software house based in Takarazuka, Japan. <a href='#ref-1'>[1]</a>
                    </p>
                    <p>
                        <a href='https://github.com/pub-education/pub-ED-sokoban'>Code on GitHub</a>
                    </p>
                    <p>
                        <a href='#'>
                            Online Game
                            <span class='material-symbols-outlined'>open_in_new</span>
                        </a>
                    </p>
                </div>
                <div className='card'>
                    <h5>IGP (Intensity Glow Products)</h5>
                    <p>
                        This is the source code that was used for this web site. A
                        commercial site I built and maintained for the company IGP in the
                        Philippines 2006-2008. The company went out of business in 2008 and
                        the site is of course no longer available. The site was built with
                        ASP.NET and used XML and XSL stylesheets which was an interesting
                        technology at the time. Dive in to the{" "}
                        <a href='https://github.com/ChrisJohDev/igp-website/tree/main/Data/StyleSheets'>
                            Data/StyleSheets
                        </a>{" "}
                        folder and have a look at what was new in the past.
                    </p>
                    <p>
                        <a href='https://github.com/ChrisJohDev/igp-website'>
                            Code on GitHub
                        </a>
                    </p>
                    <p>
                        <a href='https://web.archive.org/web/20080315012651/http://igp.ph/Default.aspx?AspxAutoDetectCookieSupport=1'>
                            A snappshot on web archive from March 2008
                        </a>
                    </p>
                </div>
                <div className='card'>
                    <h5>Website maverick-web</h5>
                    <p>
                        This was a website I used to run in the early 2000's. It was intended to promote my Web Development business. Unfortunately I didn't have enough time then since I was working in the Cruise Line industry at the time, but now we're back to have a new shot at it. This site was heavily dependent on the server side and the Perl application I built for that. Maybe unnecessarily complicated but a lot of fun to build. Have a look at the <a href="https://github.com/ChrisJohDev/maverick-web/tree/main/public_html/cgi-bin">Perl</a> scripts and reminisce or enjoy what we had to endure back then.
                    </p>
                    <p>
                        <a href='https://github.com/ChrisJohDev/maverick-web'>
                            Code on GitHub
                        </a>
                    </p>
                </div>
                <div className='card'>
                    <h5>Website chris.maverick-web</h5>
                    <p>
                        This was the website I used to promote myself as musician in the early 2000's. For those of you who remember the browser wars of the day this <a href="https://github.com/ChrisJohDev/chris-maverick-website/blob/main/cgi-bin/chrisHome.cgi">CGI</a> script migth bring back some memories or nervous sweating. :-) This too was heavily dependent on the server side for creating the webpages. The server also here was written in Perl.
                    </p>
                    <p>
                        <a href='https://github.com/ChrisJohDev/chris-maverick-website'>
                            Code on GitHub
                        </a>
                    </p>
                </div>
            </section>
            <section className='projectsReferenses'>
                <header>
                    <h4>References</h4>
                </header>
                <ul>
                    <li>
                        <div id='ref-1'>
                            <span>[1]</span>
                            <span>
                                <a href='https://en.wikipedia.org/wiki/Sokoban' target='_blank'>
                                    Wikipedia on Sokoban
                                    <span class='material-symbols-outlined'>open_in_new</span>
                                </a>
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    );
};
