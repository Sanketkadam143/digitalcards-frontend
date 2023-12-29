import React from "react";

const classes:String ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
const Tab2: React.FC = () => {
  return (
    <div className="">
      <p className="mx-2 text-xl my-2">Personal Info</p>

      <div className="grid gap-6 mb-6 md:grid-cols-3 mx-2">
        <div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="middle_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Middle Name"
            required
          />
        </div>
        <div className="col-span-3 md:col-span-1">
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="col-span-3">
          <p className="text-xl my-2">
            Your Bio{" "}
            <span className="text-gray-400 text-xs">(Limit 200 Words )</span>
          </p>

          <div className="">
            <input
              type="text"
              id="bio"
              className="bg-gray-50 h-24 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
      </div>
      <p className="mx-2 text-xl my-2">Comapny Info</p>

      <div className="grid gap-6 mb-6 md:grid-cols-2 mx-2" >
        <div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="middle_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Designation Name"
            required
          />
        </div>
        <div className="col-span-2" >
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Department Name"
            required 
            
          />
        </div>
      </div>
    </div>
  );
};

export default Tab2;