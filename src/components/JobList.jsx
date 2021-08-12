import Job from "./Job"

const JobList = ({ jobs, jobSelected, changeJob }) => (
    <div>
        {jobs.map((job) => 
            <Job key={job.id} job={job} jobSelected={jobSelected} changeJob={changeJob} />
        )}
    </div>
)

export default JobList