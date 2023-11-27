import React from "react";

const Hero: React.FC = () => {
  return (
    <div className=" bg-indigo-600 ">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="">
          <h3>WELCOME TO DIBBLE</h3>
          <h1>We Elevate Your Business With Our SaaS Solutions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-white text-indigo-500 px-4 py-2 rounded-full">
            Get Started
          </button>
          <button className="bg-white text-indigo-500 px-4 py-2 rounded-full">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="https://askproject.net/dibble/wp-content/uploads/sites/135/2023/03/Hand-Holding-Phone-13-Pro-Avelina-Studio2-768x1254.png"
            width={"500px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
