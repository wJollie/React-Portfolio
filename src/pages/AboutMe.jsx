import React from 'react';

const AboutMe = () => {
  return (
    <section>
      <h1>About Me</h1>
      <img src="/Pfp.svg" alt="My Photo" />
      <section>
        <h2>Experience</h2>
        <ul>
          <li>Currently enrolled in a full-stack development program at UPenn</li>
          <li>Completed Python Programming course from Bergen Community College</li>
          <li>Implemented and maintained several Java plugins on a server</li>
          <li>Completed a course in BASIC from Bergen Community College</li>
          <li>Programming internship at Kraftylab</li>
        </ul>
      </section>
      <section>
        <h2>Fun Facts</h2>
        <ul>
          <li>Black Belt in Karate</li>
          <li>Built my own PC and upgraded it</li>
          <li>Made components using a 3D printer</li>
          <li>Love to play video games</li>
        </ul>
      </section>
    </section>
  );
};

export default AboutMe;
