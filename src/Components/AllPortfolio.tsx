'use client'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gallery from '../images/gallery1.jpg';

const AllPortfolio =()=>{
    return (
        <>
            <Container>
                <h2 className="title">My Portfolio</h2>
                <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify>
                    <Tab eventKey="home" title="Web Development">
                        <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Graphics Design">
                    <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="longer-tab" title="SEO">
                    <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Photography">
                        <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} width={300} height={250} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}
export default AllPortfolio;