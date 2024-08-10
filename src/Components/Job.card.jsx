import React from "react"
const JobCard = ({ JobCard }) => {
    console.log(JobCard.skills)
    return (
        <>
            <div className="jobdescribe">
                <h3><strong>JobTitle:</strong> {JobCard.jobTitle}</h3>
                <p><strong>Company:</strong> {JobCard.company}</p>
                <p><i className='fa'>&#xf15b;</i> <strong>JobType:</strong> {JobCard.jobtype}</p>
                <p><i className='fa'>&#xf0ac;</i> <strong>Location:</strong> {JobCard.location}</p>
                <p><i className="fa">&#xf0b1;</i> <strong>Function:</strong> {JobCard.function}</p>
                <p><i className='fa'>&#xf109;</i> <strong>Role:</strong> {JobCard.role}</p>
                <p><i className='fa'>&#xf185;</i> <strong>Experince:</strong> {JobCard.experience}</p>
                <p><i className="fa">&#xf156;</i> <strong>Salary:</strong> {JobCard.salary}</p>
                <p><i className="fa">&#xf017;</i>  <strong>Day:</strong> {JobCard.days}</p>
            </div>
        </>
    )
}

export default JobCard