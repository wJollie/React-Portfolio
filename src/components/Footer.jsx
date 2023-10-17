import React, { useState } from "react";

function Footer() {
  const [message, setMessage] = useState('');

  const handleCopyToClipboard = (textToCopy, event) => {
    event.preventDefault();
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setMessage('Username copied to clipboard!');
    setTimeout(() => {
      setMessage(''); // Clear the message
    }, 2000);
  };

  return (    
    <footer>
      {message && <p className="message">{message}</p>}
      <div className="footer">
      <div id="contact-logos">
      <a href="https://github.com/wJollie" rel="noreferrer" target="_blank">
        <img className="logos" src="/projectImages/github.svg" alt="Github Logo" />
      </a>
      <a href="https://www.linkedin.com/in/william-jollie-68a4b7236/" rel="noreferrer" target="_blank">
        <img className="logos" src="/projectImages/linkedin.svg" alt="Linkedin Logo" />
      </a>
      <a href="#" onClick={(e) => handleCopyToClipboard('Bull#0055', e)}>
        <img className="logos" src="/projectImages/discord.svg" alt="Discord Logo" />
      </a>
    </div>
    </div>
    </footer>
  );
}

export default Footer;
