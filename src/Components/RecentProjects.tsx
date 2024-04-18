import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import recent from '../images/recent-project.jpg';

const RecentProjects =()=>{
    return (
        <>
            <Container>
                    <h2 className="title">Recent Projects</h2>
                        <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="/">Details</Link></li>
                                            <li><Link href="/" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="/">Details</Link></li>
                                            <li><Link href="/" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="/">Details</Link></li>
                                            <li><Link href="/" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image className='imageContain' src={recent} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
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