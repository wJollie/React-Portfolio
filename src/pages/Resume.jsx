import React from "react";

const Resume = () => {
  return (
    <div className="resumeWrapper">
      <h1>Resume</h1>
      <p className="resumeError">Resume download not available on mobile</p>
      <embed className="resume"
        src="./projectImages/William Jollie's Resume LATEST.pdf"
        type="application/pdf"
        width="90%"
        height="800px"
      />
    </div>
  );
}

export default Resume;
