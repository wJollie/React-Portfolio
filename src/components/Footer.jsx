import React, { useState } from "react";

function Footer() {
  const [message, setMessage] = useState(''); // State to store the message

  const handleCopyToClipboard = (textToCopy, event) => {
    event.preventDefault(); // Prevent the default behavior (scrolling to the top)
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setMessage('Copied to clipboard!');
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div id="contact-logos">
        {message && <p>{message}</p>}
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
  );
}

export default Footer;
