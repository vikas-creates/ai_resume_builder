import React from "react";
import { useNavigate } from "react-router-dom";

const UseTemplateButton = ({ title, description, image }) => {
  const navigate = useNavigate();

  const handleUseTemplate = () => {
    // Navigate to the form page with the template details passed in state
    navigate("/form", { state: { title, description, image } });
  };

  return (
    <div className=" flex justify-center my-3">
    <button
        onClick={handleUseTemplate}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
        Use Selected Template
    </button>
    </div>
    
  );
};

export default UseTemplateButton;
