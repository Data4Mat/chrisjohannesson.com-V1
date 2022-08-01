import React from 'react';

const Footer = () => {
    const fromYear = "2020";
    const nowYear = new Date().getFullYear().toString();
    return (
        <footer>
            <p>
                Copyright &copy; {fromYear} - {nowYear} Chris Johannesson
            </p>
        </footer>
    );
}

export default Footer;