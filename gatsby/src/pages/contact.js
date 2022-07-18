import React, { useContext } from 'react';
import ContactPageStyles from '../styles/ContactPageStyles';
import NavbarContext from '../utils/NavbarContext';
import SEO from '../components/SEO';

export default function ContactPage() {
  const { showNavbar, setShowNavbar } = useContext(NavbarContext);
  if (showNavbar) {
    return <></>;
  } else {
    return (
      <ContactPageStyles>
        <SEO title="Contacts" />
        <div className="content-outer-container">
          <div className="content-inner-container">
            <h1 className="content-title">Contact</h1>
            <div className="scrollable-content">
              <div className="contact-header">
                For any work or technology related inquiries, feel free to contact me using the information below.
              </div>
              <div className='my-info'>
                <div className="email-header">Email:</div>
                <div className='email'>micha.j.ingram@gmail.com</div>
                <div className="phone-header">Phone:</div>
                <div className="phone">+1 (636)-484-0824</div>
              </div>
            </div>
          </div>
        </div>
      </ContactPageStyles>
    );
  }
}