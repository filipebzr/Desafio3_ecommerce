import React from "react";

interface AlertOffProps {
  text: string;
}

const AlertOff: React.FC<AlertOffProps> = ({ text }) => {
  const getColorClass = () => {
    switch (text.toLowerCase()) {
      case "new":
        return "bg-teal-500";
      case "":
        return "bg-none";
      default:
        return "bg-red-500";
    }
  };

  return (
    <div
      className={`absolute h-[48px] w-[48px] flex items-center justify-center top-4 right-4 ${getColorClass()} text-white rounded-full px-2 py-1 text-lg`}
    >
      {text}
    </div>
  );
};

export default AlertOff;
