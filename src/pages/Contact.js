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
        <p><a href='mailto:info@chrisjohannesson.com'>info@ChrisJohannesson.com</a></p>
        <p>Email is the easiest and preferred way to contact me. Please, feel free to inquire about my services and anything that you might need help with. I&apos;m here to serve. I am also happy for any ideas, suggestions, and other remarks or comments you care to share with me.</p>
      </div>
      <div className='card'>
        <h5>Telephone:</h5>
        <p><a href='tel:+46793326745'>+46 (0)79 332 6745</a></p>
        <p>My telephone times are weekdays 09:00 (9AM)CET to 17:00 (5PM)CET all holidays and weekends closed.</p>
        <p>Please note that all times are in the Central European Time Zone.</p>
        <p>If I&apos;m not available then leave a message on my answering service and I will get back to you as soon as possible.</p>
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
