import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import recent from '../images/recent-project.jpg';

const RecentProjects =()=>{
    return (
        <>
            <Container>
                <h3 className="title">Recent Projects</h3>
                <Row>
                    <Col lg={3} md={6} sm={6} className="d-inline-grid">
                        <div className="mainCard">
                            <div className="cardImage">
                                <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                            </div>
                            <div className="cardBody">
                                <h4>Zuko</h4>
                                <p>Zuko is a automobiles</p>
                            </div>
                            <div className="cardButtons">
                                <ul>
                                    <li><Link href="/">Details</Link></li>
                                    <li><Link href="/" className='red-link'>Link</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} className="d-inline-grid">
                        <div className="mainCard">
                            <div className="cardImage">
                                <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                            </div>
                            <div className="cardBody">
                                <h4>My Nany</h4>
                                <p>My Nanny was founded at the end of 2023 to relieve parents in their everyday lives and offer more flexibility.</p>
                            </div>
                            <div className="cardButtons">
                                <ul>
                                    <li><Link href="/">Details</Link></li>
                                    <li><Link href="/" className='red-link'>Link</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} className="d-inline-grid">
                        <div className="mainCard">
                            <div className="cardImage">
                                <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                            </div>
                            <div className="cardBody">
                                <h4>Federica Dell Orto Portfolio</h4>
                                <p>Federica Dell Orto Portfolio</p>
                            </div>
                            <div className="cardButtons">
                                <ul>
                                    <li><Link href="/">Details</Link></li>
                                    <li><Link href="/" className='red-link'>Link</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} className="d-inline-grid">
                        <div className="mainCard">
                            <div className="cardImage">
                                <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                            </div>
                            <div className="cardBody">
                                <h4>Aarenet</h4>
                                <p>Aarenet is a leading technology and solutions provider for carriers.</p>
                            </div>
                            <div className="cardButtons">
                                <ul>
                                    <li><Link href="/">Details</Link></li>
                                    <li><Link href="/" className='red-link'>Link</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default RecentProjects;