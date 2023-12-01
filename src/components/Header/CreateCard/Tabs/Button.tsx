import React from "react";

const Button: React.FC<{ color: string, children: React.ReactNode }> = ({ color, children }) => {
  const colorVariants:any = {
    indigo: 'bg-indigo-500 hover:bg-indigo-800 text-white',
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
    rose: 'bg-rose-400 hover:bg-rose-600 text-white',
    orange: 'bg-orange-400 hover:bg-orange-600 text-white',
    gray: 'bg-gray-400 hover:bg-gray-600 text-white',
    // Add more color variants as needed
  };

  const colorClasses = colorVariants[color] || ''; // Default to an empty string if the color is not found

  return (
    <button className={`font-bold ${colorClasses} ...`}>
      {children}
    </button>
  );
};

export default Button;
