import React from "react";
import Tab1 from "./Tabs/Tab1";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <div className="flex flex-col h-[100vh] ml-20 mt-32">
      <div className="flex border bg-purple-600 text-white p-4 w-full shadow-md rounded">
        <button
          onClick={() => setActiveTab(1)}
          className={`mx-4 px-4 font-semibold ${activeTab === 1 ? 'bg-white p-2 border rounded text-purple-600' : ''}`}
        >
          Styling
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`mx-4 px-4 font-semibold ${activeTab === 2 ? 'bg-white p-2 border rounded text-purple-600' : ''}`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`mx-4 px-4 font-semibold ${activeTab === 3 ? 'bg-white p-2 border rounded text-purple-600' : ''}`}
        >
          Addons
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={`mx-4 px-4 font-semibold ${activeTab === 4 ? 'bg-white p-2 border rounded text-purple-600' : ''}`}
        >
          Card
        </button>
      </div>

      <div className="my-4 py-4 bg-white px-6 shadow-xl rounded h-3/5">
        {activeTab === 1 && <div> <Tab1 />  </div>}
        {activeTab === 2 && <h1>Tab2</h1>}
        {activeTab === 3 && <h1>Tab3</h1>}
        {activeTab === 4 && <h1>Tab4</h1>}
      </div>
    </div>
  );
};

export default Tabs;
