import { Col, Container, Row } from 'react-bootstrap';

const Contact =()=>{
    return (
        <>
            <h2 className="title">Contact With Me</h2>
                <Container fluid={true} className="contactDesign">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="contactForm">
                                    <h3>Send Message Coming Soon</h3>
                                    {/* <Form>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Enter Your Name" required/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="email" placeholder="Enter Your Email" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Enter Your Subject" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control as="textarea" />
                                        </Form.Group>
                                        <Form.Group className="submit__right">
                                            <Button className="success--btn">
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    </Form> */}
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <ul className="contactDetails">
                                    <li>
                                        <div className="detailList">
                                            <h3>Address</h3>
                                            <p>
                                                <i className="fas fa-map-marker-alt"></i>
                                                House: 239/3, Road: 12, Uttara, Dhaka 1230
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailList">
                                            <h3>Phone</h3>
                                            <p>
                                                <i className="fa fa-mobile"></i>
                                                +88 01811 230 332
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailList">
                                            <h3>Email</h3>
                                            <p>
                                                <i className="fas fa-envelope"></i>
                                                engr.bmhhmartin@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailList">
                                            <h3>Web</h3>
                                            <p>
                                                <i className="fas fa-globe-americas"></i>
                                                https//:www.bmhhmartin.com
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Container>

        </>
    )
}
export default Contact;