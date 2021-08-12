import { Component } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { addToFavouritesAction } from '../redux/actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFavouritesAction(company))
})

class JobDetail extends Component {
    state = {  
        job: null,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.jobSelected !== this.props.jobSelected) {
            this.setState({
                job: this.props.jobSelected,
            })
        }
    }
    jobDescription = () => {
        return {__html: this.state.job.description}
    }

    render() { 
        return (  
            <div className='mt-3' >
                {this.state.job 
                    ? <>
                        <Row>
                            <Col sm={12}>
                                <h1>{this.state.job.title} </h1>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={4}>
                                <div className="mt-3">
                                    <Image className="book-cover" src={this.state.job.company_logo_url ? this.state.job.company_logo_url : 'https://image.shutterstock.com/image-illustration/colourful-business-logo-company-name-260nw-1632621202.jpg'} alt="job selected" fluid/>
                                </div>
                            </Col>
                            <Col sm={8}>
                                <p>
                                    <span className="font-weight-bold">Company: </span>
                                    {this.state.job.company_name}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Category: </span>
                                    {this.state.job.category}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Salary: </span>
                                    {this.state.job.salary}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Job Type: </span>
                                    {this.state.job.job_type}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Required Location: </span>
                                    {this.state.job.candidate_required_location}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Publication Date: </span>
                                    {this.state.job.publication_date}
                                </p>
                                <a className='btn btn-success mr-3' variant="success" href={this.state.job.url} target="_blank" >Apply To This Position</a>
                                <Button color="primary" onClick={() => this.props.addToFavourites(this.state.job)}>
                                    Add To Favorites
                                </Button>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col sm={12} >
                                <p>
                                    {/* <span className="font-weight-bold">Description:</span><br/> */}
                                    <div className='mt-2' dangerouslySetInnerHTML={this.jobDescription()} />
                                </p>
                            </Col>

                        </Row>
                    </>
                    : <Row>
                        <Col sm={12} >
                            <h3>Please select a job to see the full description</h3>
                        </Col>
                    </Row>
            }

            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);