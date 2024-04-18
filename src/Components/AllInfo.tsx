import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import myImage from "../images/corporate.jpg";


const AllInfo =()=>{
    return (
        <>
            <Container className="mt-5">
                <div className="aboutMe">
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="myPicture">
                            <Image src={myImage} className="img-fluid" alt="my Image" height={400} width={300} ></Image>
                            </div>
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                            <div className="myInfo">
                                <h2>Engr. Md Hasnat Hanjala Martin</h2>
                                <h3>Software Engineer</h3>
                                <p>As a professional Software Engineer, I bring a wealth of knowledge and expertise acquired through my BSc in Computer Science and Engineering from Daffodil International University. Currently, I am employed at SELISE Digital Platforms, where I hold the role of Software Engineer. SELISE Digital Platforms is a distinguished multinational software company with a global presence across four countries: Switzerland, Bangladesh, the United Arab Emirates, and Bhutan. With its headquarters nestled in Zurich, Switzerland, SELISE stands as a beacon of innovation and excellence in the software industry.</p>
                                <p>My journey in software engineering has been marked by a commitment to delivering high-quality solutions and pushing the boundaries of technology. At SELISE, I am part of a dynamic team that thrives on collaboration and creativity, working on projects that span various domains and industries. From conceptualization to implementation, I leverage my skills to craft robust software solutions that meet the unique needs of our clients.</p>
                                <p>Driven by a passion for innovation and a dedication to continuous learning, I am poised to make meaningful contributions to the ever-evolving landscape of software engineering at SELISE Digital Platforms</p>
                                <Link className="success--btn" href="">Donload My CV</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={12}>
                        <h2 className="title">My Life Event</h2>
                        <div className="main-timeline">
                            <div className="timeline">
                                <Link href="https://selise.ch/" target="_blank" className="timeline-content">
                                    <div className="timeline-icon"><FaLaptopCode/></div>
                                    <div className="timeline-year">
                                        <div className="year-details">
                                            <h4>01-01-2020</h4>
                                            <h5>To</h5>
                                            <h6>Present</h6>
                                        </div>
                                    </div>
                                    <h3 className="timelineTitle">Software Engineer</h3>
                                    <p className="timelineDescription">
                                        Now I am working in SELISE Digital Platforms as a Software Engineer. SELISE is a Multinational Software Company which situated 6 countries over the world. Its head quarter situated in Zurich, Switzerland.
                                    </p>
                                </Link>
                            </div>
                            <div className="timeline">
                                <Link href="https://itgrowtech.com" target="_blank" className="timeline-content">
                                    <div className="timeline-icon"><FaLaptopCode/></div>
                                    <div className="timeline-year">
                                        <div className="year-details">
                                            <h4>18-01-2018</h4>
                                            <h5>To</h5>
                                            <h6>31-12-2019</h6>
                                        </div>
                                    </div>
                                    <h3 className="timelineTitle">Software Engineer</h3>
                                    <p className="timelineDescription">
                                        I was working in IT Grow Division Limited as a Software Engineer from 20 January, 2018 to 31 December 2019. IT Grow Division Limited is the Multinational Software Company.
                                    </p>
                                </Link>
                            </div>
                            <div className="timeline">
                                <Link href="https://daffodilvarsity.edu.bd/" target="_blank" className="timeline-content">
                                    <div className="timeline-icon"><FaGraduationCap/></div>
                                    <div className="timeline-year">
                                        <div className="year-details">
                                            <h4>18-01-2018</h4>
                                            <h5>To</h5>
                                            <h6>31-12-2019</h6>
                                        </div>
                                    </div>
                                    <h3 className="timelineTitle">BSc In CSE</h3>
                                    <p className="timelineDescription">
                                        I passed Bachelor Degree from Daffodil International University in the subject of computer science and engineering(CSE). Its a famous university of Bangladesh.
                                    </p>
                                </Link>
                            </div>
                            <div className="timeline">
                                <Link href="http://www.spsc.edu.bd/" target="_blank" className="timeline-content">
                                    <div className="timeline-icon"><FaGraduationCap/></div>
                                    <div className="timeline-year">
                                        <div className="year-details">
                                            <h4>18-01-2018</h4>
                                            <h5>To</h5>
                                            <h6>31-12-2019</h6>
                                        </div>
                                    </div>
                                    <h3 className="timelineTitle">HSc</h3>
                                    <p className="timelineDescription">
                                        I passed Higher Secondary Certificate(HSC) from Shaheed Police Smrity College in science group. It is situated in Mirpur-14, Dhaka.
                                    </p>
                                </Link>
                            </div>
                            <div className="timeline">
                                <Link href="#" target="_blank" className="timeline-content">
                                    <div className="timeline-icon"><FaGraduationCap/></div>
                                    <div className="timeline-year">
                                        <div className="year-details">
                                            <h4>18-01-2018</h4>
                                            <h5>To</h5>
                                            <h6>31-12-2019</h6>
                                        </div>
                                    </div>
                                    <h3 className="timelineTitle">SSc</h3>
                                    <p className="timelineDescription">
                                        I passed Secondary School Certificate(SSC) from Tamai Multi Lateral High School in science group. It is situated in Belkuchi, District of Sirajganj.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default AllInfo;