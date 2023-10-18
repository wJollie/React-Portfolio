import React from "react";

const Resume = () => {
  return (
    <div className="resumeWrapper">
      <h1>Resume</h1>
      <p className="resumeError">Resume download not available on mobile</p>
      <embed className="resume"
        src="https://drive.google.com/uc?id=1s3wip6OGJz10_k9h90_CUSFSEMUA-nPM"
        type="application/pdf"
        width="90%"
        height="800px"
      />
    </div>
  );
}

export default Resume;
