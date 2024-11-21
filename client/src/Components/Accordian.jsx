
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ title, isOpen, toggle, options, handleChange, checkedValues,isRadio =false}) => {
  return (
    <div className="w-4/5 m-auto mt-4">
        <div className="flex justify-between">
      <div className="text-center text-[#646464] font-semibold mb-2 cursor-pointer" onClick={toggle}>
        {title}
      </div>
      <div className="text-[#646464] font-semibold cursor-pointer" onClick={toggle} >{isOpen ? <FaMinus/> : <FaPlus/>}</div>
      </div>
      {isOpen && (
        <div>
        {options.map((option) => (
         <div key={option} className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
         <input
           type={isRadio ? "radio" : "checkbox"}
           className="w-4 h-4"
           value={option}
           onChange={handleChange}
           checked={checkedValues.includes(option)}
           name={isRadio ? "sort" : option} // Use the same name for radio buttons
         />
         <label>{option}</label>
       </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
