/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const HomeMyAdvert = ({ classData }) => (
  <div className={classData}>
    <h2>Thinking about a website?</h2>
    <p>
      If you&apos;re about to upgrade your website or just need to establish a presence on the web for yourself, your club, or your business I&apos;m here to help you find what is right for you!Having your own website is not only exciting it&apos;s also a great tool in promoting yourself, your services, and your products.If you are a business owner it helps you promote your business and it can be used to take orders, sell products, or provide information about you, your business/club or other venture.It can show directions, provide your business phone number, opening hours, products etc.It&apos;s a very valuable yet cost efficient way of communicating with your clients/customer.
    </p>
    <p>
      Go to my&nbsp;
      <a href="contact">Contact</a>
      &nbsp;page for ways to get in touch with me. I&apos;ll be happy to assist you on your web-presence journey.
    </p>
  </div>
);

HomeMyAdvert.propTypes = {
  classData: PropTypes.string.isRequired,
};

export default HomeMyAdvert;
