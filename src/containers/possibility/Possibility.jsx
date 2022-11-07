import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-img">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Acces to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyong your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptas tenetur necessitatibus a aspernatur eius numquam quasi
          similique libero ut? Mollitia quisquam consectetur laudantium vel
          assumenda placeat ipsa officia unde.
        </p>
        <h4>Request Early Acces to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
