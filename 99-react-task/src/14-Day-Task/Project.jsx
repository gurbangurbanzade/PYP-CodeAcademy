import React from "react";
import img1 from "../14-Day-Task/images/house2.jpg";
import img2 from "../14-Day-Task/images/house3.jpg";
import img3 from "../14-Day-Task/images/house4.jpg";
import img4 from "../14-Day-Task/images/house5.jpg";

const Project = () => {
  let arr = [
    {
      productName: "Summer House",
      src: img4,
    },
    {
      productName: "Brick House",
      src: img1,
    },
    {
      productName: "Renovated",
      src: img2,
    },
    {
      productName: "Barn House",
      src: img3,
    },
    {
      productName: "Summer House",
      src: img1,
    },
    {
      productName: "Brick House",
      src: img2,
    },
    {
      productName: "Renovated",
      src: img3,
    },
    {
      productName: "Barn House",
      src: img4,
    },
  ];
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <div className=" w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h3>
      </div>
      <div className="w3-row-padding">
        {/* <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Summer House
            </div>
            <img
              src="/w3images/house5.jpg"
              alt="House"
              style={{ width: "100%" }}
            />
          </div>
        </div> */}
        {arr.map((item) => {
          return (
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  {item.productName}
                </div>
                <img src={item.src} alt="House" style={{ width: "100%" }} />
              </div>
            </div>
          );
        })}
        {/* <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Brick House
            </div>
            <img
              src="/w3images/house2.jpg"
              alt="House"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Renovated
            </div>
            <img
              src="/w3images/house3.jpg"
              alt="House"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Barn House
            </div>
            <img
              src="/w3images/house4.jpg"
              alt="House"
              style={{ width: "100%" }}
            />
          </div>
        </div> */}
      </div>
      {/* <div className="w3-row-padding">
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Summer House
            </div>
            <img
              src="/w3images/house2.jpg"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Brick House
            </div>
            <img
              src="/w3images/house5.jpg"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Renovated
            </div>
            <img
              src="/w3images/house4.jpg"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Barn House
            </div>
            <img
              src="/w3images/house3.jpg"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
