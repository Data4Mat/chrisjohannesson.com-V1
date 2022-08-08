import React from 'react';
import '../styles/about.scss';

export const About = () => {
    return (
        <article id="about-me">
            <header>
                <div className="column is-one-fifth x-media_column">
                    <figure className="tile is-child image is-128x128">
                        <img className="max_photo_128 is-inline" src="/images/chris_johannesson - v2.png" />
                    </figure>
                </div>
                <div>
                    <h1>About me</h1>
                </div>
                <div className="column is-one-fifth"></div>
            </header>
            <div id="page_main" className="columns">
                <div className="column">
                    <section className="main_text">
                        <h5>Technology has always fascinated me.</h5>
                        <p className="no-indent">
                            Already as a very, very young person I always wanted to know what was inside and how things worked.
                        </p>
                        <p>
                            Many broken toys later I was entrusted with changing the cabling in my grandmother's living room pendant light. A few hours after I started that project. I proudly presented it to her. We hung it in the ceiling and she turned the switch and voila, it worked. It was still hanging there until she passed away 20 something years later.
                        </p>
                        <h6>
                            Fast forwarding to the mid 2000's.
                        </h6>
                        <p>
                            I had already in the 90's and early 2000's built a couple of websites for myself. I used the later ones as promotional platforms for myself where employers could download my CV/resume and friends and family could see photos I had taken in different places around the world during my travels. A few years later I moved to the Philippines and through some contacts I was asked to build a website for a company called IGP (Intensity Glow Products). I accepted and started to build their site. I had the whole responsibility to make the plan for the site according to their wishes and I was also the only developer. I used ASP.NET and C# with JavaScript in the frontend of course.
                        </p>
                        <p className="no-indent">
                            After that I was writing some software for my currency trading initiative in the early 2010's.
                        </p>
                        <p>
                            Over the last year or so I have taken a course in JavaScript development and an advanced class in .NET programming that finished just recently (Sep 2021). I also got Microsoft's Azure Fundamentals Certificate. Due to the quiet situation during this pandemic I decided to continue to develop my skills and have taken numerous classes on
                            <a
                                href="https://www.linkedin.com/learning/"
                                alt="Link to linkedin learning site" target="_blank"> LinkedIn learning</a>
                            . For you who haven't tried it please do. They have loads of really good quality courses and no I don't get paid to say that.I have to pay to get access just as everyone else.😊
                        </p>

                        <h6>Jumping back to my humble beginnings again.</h6>
                        <p>
                            My love for computers and programming was awakened in the early 80's. My first programmable gadget was a Casio PB100 that you could program with Basic. I was completely taken with it and I spent many nights wondering how it was working inside.
                        </p>
                        <p>
                            A few years later I got the opportunity to go back to school and decided to get an education in the field so I started to study electrical engineering. When I started there one of the first voluntary courses I took was assembler programming. We had to write a little program to control an elevator or a drill, but I wrote one for each it was just too much fun not to. It was an amazing feeling to see that miniature elevator and drill follow my exact instructions, stopping at floors and drilling holes according to the logic I had provided. I still get the same feeling when I develop web pages and can see them come to life in the browser.
                        </p>
                        <p>
                            Then followed programming in Comal a semi-popular language at the time. It was quite similar to Basic. After some math courses at the University of Gothenburg and a few courses at Chalmers University of Technology's Engineering Physics section I moved to London.
                        </p>
                        <p>
                            At that time, you could connect to the internet, which was a really new thing back then, through a BT line and a modem. I was lucky I had a 19.2KB modem but soon found out there were 28.8KB modems available. Anyhow, with this you could also set up a small personal website which was fantastic. I learned as much as I could of HTML code and had my very first site up and running in a few days. But then things changed and my music took me to many amazing and exotic places.
                        </p>
                        <p>
                            After a while I realized that my musical career would benefit from having a website where I could promote myself. So, I found a service provider and registered a domain name maverick-web.com and got to work on the project. That was, if anything ever has been, learning on the job. Thankfully I had a few really good books I had bought while I had been on shore leave in the US. My favorite was Dynamic HTML: The Definitive Reference 2nd edition by Danny Goodman. I still have it on my desk to this very day. It's safe to say that without that book I wouldn't have had any website at all. Reading it was like looking into a new world were all the secrets of the DOM was revealed and how to manipulate it.
                        </p>
                        <p>
                            Still to this day I have the same feeling inside that I had all those years ago whenever I get some new toys (framework and technologies) to use in my programming and I can see things happening in the browser. It was love at first sight and it has remained so.
                        </p>
                        <p>
                            Lastly, I would like to say I am always open for serious requests for programming and/or web development projects. You find my contact information on my
                            <a
                                href="/contact"
                                alt="link to my contact page"> contact </a>page.
                        </p>
                    </section>
                </div>
            </div>
        </article>
    );
};