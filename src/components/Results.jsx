import { Component } from "react"
import JobList from "./JobList"
import { Col, Row } from 'react-bootstrap'
// import SearchBar from "./SearchBar"
import JobDetail from "./JobDetail"

import { connect } from 'react-redux'
import { fetchJobsAction } from "../redux/actions"

const mapToStateProps = (state) => state

const mapToDispatchToProps = (dispatch) => ({
    fetchingJobs: (q) => dispatch(fetchJobsAction(q))
})

class Results extends Component {
    state = {
        // jobs: [],
        jobSelected: null,
        // query: '',
        // isLoading: true
    }

    componentDidMount = () => {
    //    this.fecthJobs()
       this.props.fetchingJobs()
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
                <Row>
                    <Col md={4} >
                        {this.props.jobsListed.isLoading
                            ? <> Loading... </>
                            : <JobList jobs={this.props.jobsListed.jobs} jobSelected={this.state.jobSelected} changeJob={this.changeJob} />
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
 
export default connect(mapToStateProps, mapToDispatchToProps)(Results);