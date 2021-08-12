import { Component } from 'react'
import { Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    state = {  }

    render() { 
        return ( 
            <>
                <Form inline className='my-3'>
                    <FormControl
                        type="text"
                        placeholder="Search Jobs"
                        className="mr-sm-2"
                        value={this.props.query}
                        onChange={this.props.inputChange}
                    // onKeyDown={(e) => {
                    //     if (e.key === 'Enter') {
                    //         this.props.fecthJobs(this.props.query)
                    //     }
                    // }}
                    />
                    <Button className='my-2' variant="outline-info" onClick={() => this.props.fecthJobs(`search=${this.props.query}`)} >Search</Button>
                    <Form.Group inline className='ml-auto' controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control as="select">
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
                    </Form.Group>
                    {/* <NavDropdown inline className='ml-auto' title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Software Development</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Customer Service</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Marketing</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Sales</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Product</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Business</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">DevOps / Sysadmin</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Finance / Legal</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Human Resources</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Teaching</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Medical / Health</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">All others</NavDropdown.Item>
                    </NavDropdown> */}
                </Form>
            </>
        );
    }
}
 
export default SearchBar;