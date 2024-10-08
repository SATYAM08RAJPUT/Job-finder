import React, { useState, useEffect, useRef } from 'react';
import './CustomMultiSelect.css';

const CustomMultiSelect = ({ options, selectedOptions, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedOptions, setLocalSelectedOptions] = useState(selectedOptions);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setLocalSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    const updatedSelection = localSelectedOptions.includes(option)
      ? localSelectedOptions.filter(item => item !== option)
      : [...localSelectedOptions, option];

    setLocalSelectedOptions(updatedSelection);
    onChange(updatedSelection);
  };
  console.log(localSelectedOptions);


  return (
    <div className="custom-multiselect" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map(option => (
            <label key={option} className="dropdown-item">
              <input
                type="checkbox"
                checked={localSelectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
