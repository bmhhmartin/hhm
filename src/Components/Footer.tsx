import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCity, FaFacebookF, FaHome, FaLinkedinIn, FaPhoneAlt, FaRoad, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TiWorld } from "react-icons/ti";




const Footer =()=>{

    const recentYear = new Date();
    const ready = recentYear.getFullYear();

    return (
        <>
            <div className='footerPart'>
                <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <h2 className="footerTitle"><i className="fas fa-street-view mr-2"></i>Address</h2>
                                <ul className="footerMenu">
                                    <li><FaHome/>Khandakar Manzil</li>
                                    <li><FaRoad/>Bashundhara Lane</li>
                                    <li><FaLocationDot/>Kazipara</li>
                                    <li><FaCity />Mirpur, Dhaka - 1216</li>
                                </ul>
                            </Col>

                            <Col lg={3} md={6} sm={12}>
                                <h2 className="footerTitle"><i className="fas fa-phone mr-2"></i>Contact</h2>
                                <ul className="footerMenu">
                                    <li><FaPhoneAlt />+88 01811 230 332</li>
                                    <li><MdEmail/>engr.bmhhmartin@gmail.com</li>
                                    <li><TiWorld/>Website</li>
                                </ul>
                            </Col>

                            <Col lg={3} md={6} sm={12}>
                            <h2 className="footerTitle"><i className="fas fa-gavel mr-2"></i>Notice</h2>
                                <ul className="footerMenu">
                                    <li><Link href="/refund">Refund Policy</Link></li>
                                    <li><Link href="/condition">Terms And Condition</Link></li>
                                    <li><Link href="">My Resume</Link></li>
                                </ul>
                            </Col>
                            
                            <Col lg={3} md={6} sm={12}>
                            <h2 className="footerTitle"><i className="fas fa-comments mr-2"></i>Follow Me</h2>
                                <p className="socialDes">Connect with social media</p>
                                <ul className="lastMenu">
                                    <li>
                                        <Link href="#">
                                            <IoLogoGoogleplus/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaFacebookF/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaTwitter/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaLinkedinIn />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaYoutube />
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                </Container>
                <div className="copyRight text-center">
                    <Link href="#">Copyright&copy;bmhhmartin{ready}.All Right Reserved</Link>
                </div>
            </div>
            
        </>
    )
}
export default Footer;