import React from "react";
import ProfileCard from "../../components/Header/CreateCard/ProfileCard";
import Tabs from "../../components/Header/CreateCard/Tabs";

const CreateCard: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className=" flex max-w-7xl mx-auto">
        <div className="w-1/3">
          <ProfileCard />
        </div>
        <div className="w-2/3">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
