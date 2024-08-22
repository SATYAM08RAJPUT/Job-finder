import React, { useState } from "react"
import JobCard from "./Job.card"
const JobListData = ({ jobListset, handleJobItemClick }) => {
    const [active, setActive] = useState(null)
    console.log(jobListset)

    return (
        <div className="filter-item">
        {jobListset.length > 0 ? (<>
            {jobListset.map((job) => {
                return <div key={job.id}
                    onClick={(index) => { handleJobItemClick(job.id); setActive(index); }}
                    className="jobposition" >
                    <JobCard JobCard={job} />
                </div>
            })}
        </>) : <img src="https://www.archanaprojects.com/Frontend/images/not-found.png" alt='No results found' />}

    </div>
    )
}

export default JobListData
