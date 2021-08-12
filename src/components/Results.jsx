import { Component } from "react"
import JobList from "./JobList"
import { Col, Row } from 'react-bootstrap'
import SearchBar from "./SearchBar"
import JobDetail from "./JobDetail"

class Results extends Component {
    state = {
        jobs: [],
        jobSelected: null,
        query: '',
        isLoading: true
    }

    fecthJobs = async (query = "&limit=10") => {
        try {
            let response = await fetch(
                `https://remotive.io/api/remote-jobs?search=${query}`
            )
            if (response.ok) {
                let results = await response.json()
                let resultJobs = results.jobs
                console.log(resultJobs);
                this.setState({ 
                    jobs: resultJobs, 
                    isLoading: false
                })
            } else {
                console.log('Something went wrong');
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
       this.fecthJobs()
    }

    inputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    changeJob = (job) => {
        this.setState({
            jobSelected: job,
        })
    }

    render() { 
        return (
            <>
                {/* <Row> */}
                    <SearchBar query={this.state.query} inputChange={this.inputChange} fecthJobs={this.fecthJobs} />
                {/* </Row> */}
                <Row>
                    <Col md={4} >
                        {this.state.isLoading
                            ? <> Loading... </>
                            : <JobList jobs={this.state.jobs} jobSelected={this.state.jobSelected} changeJob={this.changeJob} />
                        }
                    </Col>
                    <Col md={8} >
                        <JobDetail jobSelected={this.state.jobSelected} />
                    </Col>
                </Row>
            </>
        );
    }
}
 
export default Results;