import React from "react";
import img1 from "../14-Day-Task/images/team2.jpg";
import img2 from "../14-Day-Task/images/team1.jpg";
import img3 from "../14-Day-Task/images/team3.jpg";
import img4 from "../14-Day-Task/images/team4.jpg";
const About = () => {
  let arr = [
    {
      memberName: "John Doe",
      src: img1,
    },
    {
      memberName: "Jane Doe",
      src: img2,
    },
    {
      memberName: "Mike Ross",
      src: img3,
    },
    {
      memberName: "Dan Star",
      src: img4,
    },
  ];

  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="w3-row-padding w3-grayscale">
        {arr.map((item) => {
          return (
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src={item.src} alt="John" style={{ width: "100%" }} />
              <h3>{item.memberName}</h3>
              <p className="w3-opacity">CEO &amp; Founder</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Contact
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
