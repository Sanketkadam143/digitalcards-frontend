import React from "react";

const Tab1: React.FC = () => {
  const colorOptions = [
    ["from-indigo-500", "to-indigo-700"],
    ["from-purple-500", "to-purple-700"],
    ["from-rose-400", "to-rose-600"],
    ["from-orange-400", "to-orange-600"],
    ["from-gray-400", "to-gray-600"],
  ];

  return (
    <div className="">
      <p className="mx-2 text-xl my-2">Colors</p>
      <div className="flex my-2 py-2 pb-6 border-b-2">
        {colorOptions.map((colors, index) => (
          <div
            key={index}
            className={`h-12 w-12 rounded-full bg-gradient-to-r ${colors[0]} ${colors[1]} cursor-pointer mx-2`}
          ></div>
        ))}
      </div>
      <div className="border-b-2 pb-2">
        <p className="mx-2 text-xl my-2">Profile Photo</p>
        <div className="my-4 w-96 mx-2 ">
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            id="formFileLg"
            type="file"
          />
        </div>
      </div>
      <div className=" pb-2">
        <p className="mx-2 text-xl my-2">Choose Style</p>

        <div className="flex">
          <button className="bg-purple-700 p-2 my-2 mx-2 text-white rounded w-24">Style1</button>
          <button className="bg-rose-700 p-2 my-2 mx-2 text-white rounded w-24">Style2</button>
          
        </div>
      </div>
    </div>
  );
};

export default Tab1;
