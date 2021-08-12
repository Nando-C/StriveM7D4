import { Component } from 'react'
import { Form, FormControl, Button, Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { fetchJobsAction } from '../redux/actions';

const mapToStateProps = (state) => state

const mapToDispatchToProps = (dispatch) => ({
    fetchJobs: (q) => dispatch(fetchJobsAction(q))
})

class NavBar extends Component {
    state = { 
        query: '',
        category: 'Select',
     }

     componentDidMount = () => {
           this.props.fetchJobs()
        }

    inputChange = (e) => {
        this.setState({
            ...this.state,
            query: e.target.value
        })
    }

    render() { 
        return ( 
            <Navbar bg="light" variant="light" expand="sm">
                <Link to='/'>
                    <Image className='brandLogo mr-3' src='https://remotive.io/remotive_website_static_pages/static/src/img/logo_remotive.png' />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/favourites'>Favourites</Link>
                    </Nav>
                    {/* <Form.Group controlId="exampleForm.ControlSelect1"> */}
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control 
                            className="ml-2" 
                            as="select" 
                            placeholder="Select Category"
                            value={this.state.category} 
                            onChange={(e) => {
                                this.setState({
                                    ...this.state,
                                    category: e.target.value,
                                })
                                this.props.fetchJobs(`category=${e.target.value}`)
                            }} >
                            <option>Select Category</option>
                            <option>Software Development</option>
                            <option>Customer Service</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                            <option>Product</option>
                            <option>Business</option>
                            <option>DevOps / Sysadmin</option>
                            <option>Finance / Legal</option>
                            <option>Human Resources</option>
                            <option>Teaching</option>
                            <option>Medical / Health</option>
                            <option>All others</option>
                        </Form.Control>
                    {/* </Form.Group> */}
                    {/* <Form inline className='my-3'> */}
                    <FormControl
                        type="text"
                        placeholder="Search Jobs"
                        className="m-2"
                        value={this.state.query}
                        onChange={(e) => this.inputChange(e)}
                    // onKeyDown={(e) => {
                    //     if (e.key === 'Enter') {
                    //         this.props.fecthJobs(this.props.query)
                    //     }
                    // }}
                    />
                    <Button className='my-2' variant="outline-info" onClick={() => this.props.fetchJobs(`search=${this.state.query}`)} >Search</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default connect(mapToStateProps, mapToDispatchToProps)(NavBar);