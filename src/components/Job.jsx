import { Card } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const Job = ({ job, jobSelected, changeJob }) => (
    <Card
        className={jobSelected?.id === job.id ? "border-thick mt-3" : "mt-3"}
        onClick={() => changeJob(job)}
        style={{ cursor: "pointer" }}
    >
        <Card.Body className="d-flex">
            <Link to={"/company-detail/" + job.company_name}>
                <img 
                className="book-image" 
                src={job.company_logo_url ? job.company_logo_url : 'https://image.shutterstock.com/image-illustration/colourful-business-logo-company-name-260nw-1632621202.jpg'} 
                alt="company logo" />
            </Link>
            <div>
                <Card.Text className="font-weight-bold">{job.title}</Card.Text>
                <Card.Text >
                    <Link to={"/company-detail/" + job.company_name}>{job.company_name}</Link>
                </Card.Text>
                <Card.Text >{job.category}</Card.Text>
                <Card.Text >{job.job_type}</Card.Text>
                <Card.Text >{job.salary}</Card.Text>
            </div>
        </Card.Body>
    </Card>
)

export default withRouter(Job)