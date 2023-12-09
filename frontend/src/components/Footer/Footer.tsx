import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness5Icon from '@mui/icons-material/Brightness5'; // Sun icon
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close'; // Make sure to import CloseIcon
import './footer.css';

interface FooterProps {
  theme: string;
  toggleTheme: () => void;
}

const Footer = ({ theme, toggleTheme }: FooterProps) => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const handleToggleContactForm = () => {
    setIsContactFormVisible(!isContactFormVisible);
  };

  return (
    <footer className={`footer-app ${theme}`}>
      <div className="footer-main">
        <IconButton size='large' color='inherit' aria-label='logo'>
          {/* Your logo icon */}
        </IconButton>
        <Typography variant='h6' component='div'>
          Roomies
        </Typography>
      </div>
      <div className="footer-section">
        <Typography variant="subtitle1" gutterBottom>PRODUCT</Typography>
        <Link to="/"><HomeIcon /> Home</Link>
        <Link to="/login"><AccountCircleIcon /> My Account</Link>
        {/* Add other product links here */}
      </div>
      <div className="footer-section">
        <Typography variant="subtitle1" gutterBottom>RESOURCES</Typography>
        <Link to="/about-us"><InfoIcon /> About Us</Link>
        <Link to="/blog"><LibraryBooksIcon /> Blog</Link>
        <Link to="/chat"><ChatIcon /> Chat</Link>
        {/* Add other resource links here */}
      </div>
      <div className="footer-section">
        <Typography variant="subtitle1" gutterBottom>CONTACT</Typography>
        <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></IconButton>
        <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></IconButton>
        <IconButton component="a" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></IconButton>
        <Typography variant="subtitle1" onClick={handleToggleContactForm} style={{ cursor: 'pointer' }}>
          Contact Us
        </Typography>
      </div>
      {isContactFormVisible && (
        <div className="footer-contact-form">
          <form action={`mailto:your-email@example.com`} onSubmit={() => setIsContactFormVisible(false)}>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Phone (optional)" name="phone" />
            <textarea placeholder="Message" name="message"></textarea>
            <IconButton type="submit" color='inherit' aria-label='submit'>
              <EmailIcon />
            </IconButton>
            <IconButton color='inherit' aria-label='close' onClick={handleToggleContactForm}>
              <CloseIcon />
            </IconButton>
          </form>
        </div>
      )}
    </footer>
  );
};

export default Footer;
