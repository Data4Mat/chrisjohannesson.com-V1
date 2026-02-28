import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  const fromYear = '2020';
  const nowYear = new Date().getFullYear().toString();
  return (
    <footer>
      <p>
        Copyright &copy;
        &nbsp;
        {fromYear}
        &nbsp;
        -
        &nbsp;
        {nowYear}
        &nbsp;
        Chris Johannesson&nbsp;/&nbsp;
      </p>
      <p>
        Maintained by
        <a href='https://data4mat.se'>Data4Mat&trade; AB</a>
      </p>
    </footer>
  );
};

export default Footer;
