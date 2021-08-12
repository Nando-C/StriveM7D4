import { connect } from "react-redux"
import { Row, Card, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { removeFromFavouritesAction } from "../redux/actions"

const mapStateToProps = (state) => ({
    favourites: state.companies.favourites
})

const mapDispatchToProps = (dispatch ) => ({
    removeFromFavourites: (index) => dispatch(removeFromFavouritesAction(index))
})

const Favourites = ({favourites, removeFromFavourites}) => ( 
    <>
    <Row className='m-3 justify-content-center'>
        <h1>Favourite Companies</h1>
    </Row>
    <Row>
        
        {favourites.map((fav, i) =>
                <Card
                    key={i}
                    className="m-3"
                    style={{ width: 200 }}>
                    <Card.Body className="text-center">
                        <Link to={"/company-detail/" + fav.companyName}>
                            <img
                                className="book-image m-auto"
                                src={fav.logo}
                                alt="company logo" />
                        </Link>
                        <Card.Text >
                        <Link to={"/company-detail/" + fav.companyName} style={{ color: '#455a64', textDecorationThickness: 5 }}>
                            <p className='mt-3'>
                                <span className="font-weight-bold">{fav.companyName}</span>
                            </p>
                            </Link>
                        </Card.Text>
                        <Button size="sm" variant="danger" onClick={() => removeFromFavourites(i)}>
                            <FaTrash />
                        </Button>
                    </Card.Body>
                </Card>
        )}
    </Row>
    </>
)

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)