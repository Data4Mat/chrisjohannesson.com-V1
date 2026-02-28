/* eslint-disable max-len */
import React from 'react';
import '../styles/about.scss';

const About = () => {
  const resumeUrl = 'https://resources.chrisjohannesson.com/documents/pdf/Resume.pdf';
  const linkedinLearningUrl = 'https://www.linkedin.com/learning/';
  const newTab = 'Opens in new tab';
  return (
    <article id='about-me'>
      <header>
        {/* <div className="column is-one-fifth x-media_column">
                    <figure className="tile is-child image is-128x128">
                        <img className="max_photo_128 is-inline" src="/images/chris_johannesson - v2.png" />
                    </figure>
                </div> */}
        <div>
          <h1>Technology has always fascinated me.</h1>
        </div>
      </header>
      <div id='page_main' className='columns'>
        <div className='column'>
          <section className='main_text'>

            <p>
              Technology has fascinated me for as long as I can remember. As a child,
              I wanted to understand what was inside things and how they worked — often
              by carefully taking them apart and attempting to rebuild them.
            </p>

            <p>
              One moment stands out clearly. After many sacrificed toys and experiments,
              I was entrusted with rewiring the pendant light in my grandmother’s living
              room. I was still young, and the responsibility meant more to me than I
              understood at the time. I worked methodically, finished the job, and we
              hung it back in place. When she turned the switch and it lit up, the
              feeling was not just relief — it was pride.
            </p>

            <p>
              That lamp remained there until she passed away more than two decades later.
              It was a small project, but it carried weight. It taught me that careful
              work, responsibility, and attention to detail create results that last.
              That lesson has followed me into every technical system I have built since.
            </p>

            <p>
              My first programmable device was a Casio PB-100 in the early 1980s.
              Writing small programs in BASIC and watching logic come to life sparked
              a lasting interest in structured problem solving and system design.
            </p>

            <h6>Early Academic Foundations</h6>

            <p>
              In 1988 I studied mathematics at the University of Gothenburg, followed by
              Engineering Physics studies at Chalmers University of Technology
              (1988–1990). These years strengthened analytical thinking and reinforced a
              disciplined approach to technical problem solving.
            </p>

            <p>
              In 1995 I completed the Derivatives Trading Training Program at Financial
              Instruments Strategies Ltd. in London, UK. Although outside software development, the
              program deepened my understanding of quantitative modeling, structured
              risk analysis, and complex system behavior — skills that translate well
              into software architecture and systems thinking.
            </p>

            <h6>Web & Software Development Path</h6>

            <p>
              During the 1990s I began building websites and experimenting with early
              internet technologies. Over time this evolved into deeper technical work,
              including server-side programming, structured data processing using XML
              and XSLT, and backend scripting in Perl. These early experiences provided
              practical insight into how web systems communicate, transform data, and
              operate on the server.
            </p>

            <p>
              Prior to formal university studies in web development, I completed
              advanced coursework in C# and .NET programming and earned Microsoft’s
              Azure Fundamentals certification. This strengthened my backend foundation
              and provided early exposure to cloud-based infrastructure and
              service-oriented thinking.
            </p>

            <h6>Formal Web Development Education</h6>

            <p>
              I earned an Utbildningsbevis from Yrkeshögskolan with a specialization in
              JavaScript development (80 YH-poäng), consolidating modern frontend and
              application-level development skills.
            </p>

            <p>
              Between 2022 and 2024 I attended the two-year Web Programmer program at
              Linnaeus University with a specialization in web development.
            </p>

            <p>
              The program provided structured training in client- and server-side web
              programming, object-oriented development, UML-based analysis and design,
              and established design patterns. It included software testing (unit,
              integration, and system testing), introduction to software quality,
              database technology (SQL and exposure to other database models),
              web architecture, and agile development methods.
            </p>

            <p>
              Emphasis was placed on writing robust applications with high code quality,
              applying disciplined engineering practices, and developing maintainable
              systems rather than short-term solutions.
            </p>

            <h6>Today</h6>

            <p>
              My background combines early technical curiosity, analytical academic
              foundations, structured formal education, and practical experience across
              both legacy and modern technologies. This breadth provides a durable
              understanding of how web systems are designed, implemented, tested,
              and evolved over time.
            </p>

          </section>
        </div>
      </div>
    </article>
  );
};

export default About;
