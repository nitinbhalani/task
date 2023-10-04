import React, { useState, useEffect } from "react";
import { JobList } from "../componet/constant";
import {useNavigate} from 'react-router-dom'

function JobListingPage({ lagh }) {
  const [jobs, setJobs] = useState([]);
  const { job } = JobList;
  const Navigate = useNavigate()
  const handelApply = ()=>{
    Navigate('/applypage')
  }

  useEffect(() => {
    if (Array.isArray(job)) {
      const filteredJobs = job.filter((jobItem) => {
        if (jobItem.technology && typeof jobItem.technology === "string") {
          return jobItem.technology.toLowerCase().includes(lagh.toLowerCase());
        }
        return false;
      });
      setJobs(filteredJobs);
    }
  }, [lagh, job]); // Update the jobs when the 'lagh' prop or 'job' changes

  return (
    <div>
      <h1>Job Listings</h1>
      <p>Filtering jobs for language: {lagh}</p>
      <ul>
        <div className="row">
        {jobs.map((filteredJob, index) => (
          // <li key={index}>{filteredJob.title}</li>
            <div className="col-md-4 mb-2">
          <div className="card" style={{width: "20rem"}} key={index}>
            <div className="card-body">
              <h5 className="card-title">{filteredJob.title}</h5>
              <p>Company Name: {filteredJob.company}</p>
              <p>Location : {filteredJob.location}</p>
              <p>Technology : {filteredJob.technology}</p>
              <button className="btn btn-dark" onClick={handelApply}>Apply</button>
            </div>
            </div>
          </div>
        ))}
        </div>
      </ul>
    </div>
  );
}

export default JobListingPage;
