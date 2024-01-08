import React from "react";

const description =
  "I am currently studying Web Design at Barnett Technical University. I have also completed a few certificates in the past few years. I have completed a certificate in Graphic Design, and another in Web Design. I am currently working on a certificate in Web Development.";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "60%", alignSelf: "center" }}>
          <p style={{ textAlign: "center" }}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
