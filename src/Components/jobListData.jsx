import React, { useState } from "react"
import JobCard from "./Job.card"
const JobListData = ({ jobListset, handleJobItemClick }) => {
    const [active, setActive] = useState(null)
    console.log(jobListset)

    return (
        <div className="filter-item">
            {jobListset.map((job, index) => {
                return <div key={job.id}
                    onClick={(index) => { handleJobItemClick(job.id); setActive(index); }}
                    // className={`jobposition ${active ? 'active' : ' '}`}
                    // className={active === index ? 'active' : ''}
                    className="jobposition" >
                    <JobCard JobCard={job} />
                </div>
            })
            }
        </div>
    )
}

export default JobListData
