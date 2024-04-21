import { Col, Container, Row } from 'react-bootstrap';
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaGlobe, FaLocationDot, FaMobileButton } from "react-icons/fa6";


const Contact =()=>{
    return (
        <>
            <h2 className="title">Contact With Me</h2>
                <Container fluid={true} className="contactDesign">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <ul className="contactDetails">
                                    <li>
                                        <div className="detailList">
                                            <h3>Address</h3>
                                            <p>
                                                <FaLocationDot />
                                                Khandakar Manzil, Bashundhara Lane, Kazipara, Mirpur, Dhaka - 1216
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailList">
                                            <h3>Phone</h3>
                                            <p>
                                                <FaMobileButton/>
                                                +88 01811 230 332
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailList">
                                            <h3>Email</h3>
                                            <p>
                                                <BsEnvelopeAtFill/>
                                                engr.bmhhmartin@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailList">
                                            <h3>Web</h3>
                                            <p>
                                                <FaGlobe/>
                                                https://bmhhmartin.vercel.app/
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="contactForm">
                                    <h3>Location</h3>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49117.234414074635!2d90.35543927409209!3d23.79510844884811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d27ac9c35b%3A0x23abcbea09cf64c!2sKazipara!5e0!3m2!1sen!2sbd!4v1713432307610!5m2!1sen!2sbd" width="100%" height="415"></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

        </>
    )
}
export default Contact;