import { useState } from 'react'
import './App.css'

import { useEffect } from 'react'
// import jobListing from "./public/jobList.json"
import jobListing from "../public/data/jobList.json"
import FilterPanel from './Components/FilterPanel'
import JobListData from './Components/jobListData'
import Header from './Header/header'
import JobDescription from './Components/JobDescription'

function App() {
  const [jobList, setJobList] = useState([]);
  const [jobDescription, setJobDescription] = useState()
  const [searchTermData, setSearchTermData] = useState('');
  const [locationData, setLocationData] = useState('')
  const [experinceData, setExperinceData] = useState('')

  const [filters, setFilters] = useState({
    location: [],
    experience: [],
    salary: [],
    function: [],
    role: [],
    type: []
  })

  useEffect(() => {
    let jobListed = jobListing.jobList
    console.log(jobListed)

    if (filters.location.length > 0) {
      jobListed = jobListed.filter(job => filters.location.includes(job.location))
      console.log(jobListed);
    }

    if (filters.experience.length > 0) {
      jobListed = jobListed.filter(job => filters.experience.includes(job.experience));
      console.log(jobListed)
    }

    if (filters.salary.length > 0) {
      jobListed = jobListed.filter(job => filters.salary.includes(job.salary))
    }

    if (filters.function.length > 0) {
      jobListed = jobListed.filter(job => filters.function.includes(job.function))
    }

    if (filters.role.length > 0) {
      jobListed = jobListed.filter(job => filters.role.includes(job.role))
    }

    if (filters.type.length > 0) {
      jobListed = jobListed.filter(job => filters.type.includes(job.jobtype))
    }

    setJobList(jobListed);

  }, [filters])


  const handleFilterChange = (name, value) => {
    console.log(name, value)
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }))
  }

  const filteredItems =
    jobList.filter(item =>
      item.role.toLowerCase().includes(searchTermData.toLowerCase()) &&
      item.location.toLowerCase().includes(locationData.toLowerCase()) &&
      item.experience.toLowerCase().includes(experinceData.toLowerCase())
    );
  console.log(filteredItems);



  //  handleJobDescriptionChange()

  const fetchDefaultJobDescription = async () => {
    try {
      const fetchData = await fetch("public/data/id/1.json");
      const defaultData = await fetchData.json();
      console.log(defaultData)
      setJobDescription(defaultData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    fetchDefaultJobDescription()
  }, [])


  const fetchJobDescription = async (selectedJob) => {
    try {
      const fetchData = await fetch(`public/data/id/${selectedJob}.json`);
      console.log(fetchData);
      const concatenatedData = await fetchData.json();
      console.log(concatenatedData)
      setJobDescription(concatenatedData);
    }
    catch (error) {
      console.error("Fetch wrong", error)
    }
  }

  return (
    <>
      <div className='app'>
        <Header data={jobList} setSearchTermData={setSearchTermData} setLocationData={setLocationData} setExperinceData={setExperinceData} />
        <FilterPanel filters={filters} onChange={handleFilterChange} />
        <div className='job-container'>
          <JobListData jobListset={filteredItems} handleJobItemClick={(id) => fetchJobDescription(id)} />
          <JobDescription jobDescription={jobDescription} jobList={jobList} />
        </div>
      </div>
    </>
  )
}

export default App
