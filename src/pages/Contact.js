/* eslint-disable max-len */
import React from 'react';
import '../styles/contact.scss';

const Contact = () => (
  <article id='contact_me'>
    <header>
      <h1>Contact Me</h1>
    </header>
    <section>
      <div className='card'>
        <h5>Email:</h5>
        <p><a href='mailto:info@data4mat.se'>info@data4mat.se</a></p>
        <p>
          This is the official contact address for Data4Mat AB. All inquiries
          regarding web development, website maintenance, Website-as-a-Service
          (WSaaS), partnerships, or general questions should be directed here.
          All professional engagements are conducted exclusively through Data4Mat AB.
        </p>
        <p>
          For clients outside Europe, email is the recommended method of contact.
        </p>
      </div>

      <div className='card'>
        <h5>Telephone:</h5>
        <p><a href='tel:+4637166030'>+46 (0)371 660 30</a></p>
        <p>
          Business hours for Data4Mat AB are weekdays
          09:00–13:00 CET (9:00 AM–1:00 PM CET).
          Closed on weekends and public holidays.
        </p>
        <p>
          All times are stated in Central European Time (CET).
        </p>
      </div>
      <div className='card'>
        <h5>LinkedIn&trade;</h5>
        <p><a href='https://linkedin.com/in/chrisjohdev'>Chris Johannesson - LinkedIn&trade;</a></p>
        <p>Link to my profile on LinkedIn&trade; from there it&apos;s possible to connect with me and to send me a message. You can also follow me to always get the latest updates.</p>
      </div>
      <div className='card'>
        <h5>GitHub&trade;</h5>
        <p><a href='https://github.com/chrisjohdev'>Chris Johannesson - GitHub&trade;</a></p>
        <p>You can follow me on GitHub&trade; and all my public code is available there to download or fork. All code is free or licenced with a MIT Licence which makes them free to use and distribute as you please.</p>
      </div>
    </section>

  </article>
);
export default Contact;
