// ProfileCard.tsx

import React from "react";
import AddIcon from "../../icon/Add";

const ProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative bg-gradient-to-b from-purple-500 to-purple-800 flex h-32 w-full justify-center rounded-xl bg-cover">
          {/* <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
            alt=""
          /> */}
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full w-full rounded-full"
              src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            Adela Parkson
          </h4>
          <p className="text-base font-normal text-gray-600">Product Manager</p>
        </div>
        

        <div className="my-4">
          <p className="py-1"><span className="font-semibold mr-2	">Address : </span>  Home Lunar Colony, Moon</p>
          <p  className="py-1"><span className="font-semibold	mr-2">Company :</span>Google,Mars</p>
        </div>
       
<div className="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              17
            </p>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              9.7K
            </p>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              434
            </p>
            <p className="text-sm font-normal  text-gray-600">Following</p>
          </div>
        </div>
        <button className="p-2 bg-violet-500 text-white w-80 my-3 rounded flex items-center justify-center font-semibold">
  Connect With Me <span className="ml-2"><AddIcon /></span>
</button>
      </div>
      {/* <p className="font-normal text-navy-700 mt-20 mx-auto w-max">
        Profile Card component from{' '}
        <a
          href="https://horizon-ui.com?ref=tailwindcomponents.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 font-bold"
        >
          Horizon UI Tailwind React
        </a>
      </p> */}
    </div>
  );
};

export default ProfileCard;
