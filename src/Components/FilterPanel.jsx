import React from "react"
import CustomMultiSelect from "./CustomMultiSelect"

const FilterPanel = ({ filters, onChange }) => {

  const handleLocationChange = (newlocation) => {
    onChange('location', newlocation)
  }

  const handleExperinceChange = (newExperince) => {
    onChange('experience', newExperince);
  };

  const handleSalaryChange = (newSalary) => {
    onChange('salary', newSalary);
  };

  const handleFunctionChange = (newSalary) => {
    onChange('function', newSalary);
  };
  const handleRoleChange = (newSalary) => {
    onChange('role', newSalary);
  };

  const handleJobTypeChange = (newRole) => {
    onChange('type', newRole);
  };

  return (
    <>
      <div className="filter-panel">
        <CustomMultiSelect
          options={['Mohali', 'Noida', 'Delhi', "Chandigarth","Meerut"]}
          selectedOptions={filters.location}
          onChange={handleLocationChange}
          label="Location"
        />

        <CustomMultiSelect
          options={['Fresher', '3 Years', '5+ Years',"1+ Years"]}
          selectedOptions={filters.experience}
          onChange={handleExperinceChange}
          label="Experince"
        />

        <CustomMultiSelect
          options={['20-25K', '50K', '2 Lakh',"5 Lakh"]}
          selectedOptions={filters.salary}
          onChange={handleSalaryChange}
          label="Salary"
        />

        <CustomMultiSelect
          options={['Technology', 'IT']}
          selectedOptions={filters.function}
          onChange={handleFunctionChange}
          label="Function"
        />

        <CustomMultiSelect
          options={['Java Developer', 'React Designer', "UI/UX Designer"]}
          selectedOptions={filters.function}
          onChange={handleRoleChange}
          label="Role"
        />

        <CustomMultiSelect
          options={['Full Time', 'Part Time']}
          selectedOptions={filters.function}
          onChange={handleJobTypeChange}
          label="Job-Type"
        />
      </div>
    </>
  )

}
export default FilterPanel