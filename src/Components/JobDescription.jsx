export default function JobDescription({ jobDescription, jobList }) {
    console.log(jobDescription)
    return (
        <div className="mainConatiner" >
            <div className="jobtitle" >
                <div>
                    <h3>{jobDescription && jobDescription.jobTitle}</h3>
                    <p>{jobDescription && jobDescription.companyName}</p>
                </div>
                <div className="apply-btn">
                    <button>Apply Now</button>
                </div>
            </div>

            <div className="job-info">
                <a href="#hightLight">{jobDescription && jobDescription.Highlights}</a>
                <a href="#jobdescription">{jobDescription && jobDescription.JobDescription}</a>
                <a href="#more">{jobDescription && jobDescription.more}</a>
                <a href="#recruiter">{jobDescription && jobDescription.RecruiterInformation}</a>
            </div>

            <div className="third-class">
                <div className="highlight-info" id="hightLight">
                    <div><i className='fa'>&#xf0ac;</i>  {jobDescription && jobDescription.location}</div>
                    <div><i className="fa">&#xf0b1;</i>  {jobDescription && jobDescription.experience}</div>
                    <div><i className="fa">&#xf017;</i>  {jobDescription && jobDescription.days}</div>
                </div>

                <h3 className="jobdcrpt" id="jobdescription">{jobDescription && jobDescription.JobDescription}</h3>

                <div>
                    {jobDescription && jobDescription.description.map((itm) => {
                        return <div className="descriptionline">
                            <p>{itm.des}</p>
                        </div>
                    })}
                </div>
                <h3 className="more-container" id="more">{jobDescription && jobDescription.more}</h3>
                <div className="funtion-info">
                    <div>Function</div>
                    <div>{jobDescription && jobDescription.function}</div>
                    <div>Job-type</div>
                    <div>{jobDescription && jobDescription.jobtype}</div>
                    <div>Role</div>
                    <div>{jobDescription && jobDescription.role}</div>
                    <div>Skills</div>
                    <div>{jobDescription && jobDescription.skills}</div>
                </div>
                <h3 className="recuriterheading" id="recruiter">{jobDescription && jobDescription.RecruiterInformation}</h3>
                <div className="recriter-info">
                    {jobDescription && jobDescription.description.map((itm) => {
                        return <div className="descriptionline">
                            <p>{itm.des}</p>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}