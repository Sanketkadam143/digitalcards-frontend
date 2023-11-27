import React from "react";
import { routes } from "../../../routes";
const Navbar: React.FC = () => {
  return (
    <div className="p-4  bg-indigo-600 border-b">
      <div className="max-w-7xl mx-auto flex justify-between ">
        <div>
          <img
            src="https://askproject.net/dibble/wp-content/uploads/sites/135/2023/03/logo_Asset-2.png"
            width={"130px"}
          />
        </div>
        <div>

            <ul className="flex">
                {routes.map((route ,index) => (
                    <li key={index} className="mx-2 text-white">{route.title}</li>
                ))}
            </ul>


        </div>
        <div>

            <button className="bg-white text-indigo-500 px-4 py-2 rounded-full">Login</button>
            <button className="bg-white text-indigo-500 px-4 py-2 rounded-full">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
