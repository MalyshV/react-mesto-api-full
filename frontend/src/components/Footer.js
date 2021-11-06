import React from 'react';

function Footer() {
  let today = new Date();

  return(
    <footer className="footer page__container">
      <p className="footer__copyrigth">&copy; {today.getFullYear()} Mesto Russia</p>
    </footer>
  )
}

export default Footer;