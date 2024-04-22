'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import gallery from '../images/gallery1.jpg';

const AllPortfolio =()=>{
    return (
        <>
            <Container>
                <h2 className="title">My Portfolio</h2>
                <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3" justify>
                    <Tab eventKey="home" title="Web Development">
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}>
                            <Masonry gutter={"16px"}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Card Title</h4>
                                        <p>Loremssssss fffffff asdfas dfasdf asd fasdf asdf asdf asdf asf asf asdfasdf asdf asf af ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="/">Details</Link></li>
                                            <li><Link href="/" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>  
                            </Masonry>
                        </ResponsiveMasonry>
                    </Tab>
                    <Tab eventKey="profile" title="Graphics Design">
                        <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Logo Design</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link target='_blank' href="https://drive.google.com/drive/u/0/folders/1ZvyVm5FkAExQk2FigmPvWlbPag0wMBVM" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Banner Design</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link target='_blank' href="https://drive.google.com/drive/u/0/folders/1vArTv_lYCfvwnJW4-lt_w_pfHco7HVUR" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Icon Design</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link target='_blank' href="https://drive.google.com/drive/u/0/folders/1tFJlTtua2W322UTxH39yn6cyFro_xHH4" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Poster Design</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat quisquam voluptas quasi veritatis ab rerum repudiandae ratione perferendis error?</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link target='_blank' href="https://drive.google.com/drive/u/0/folders/1blxvy7GhUpUtakxERpyRP7r_VVuzNkVs" className='red-link'>Link</Link></li>
                                        </ul>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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
                                        <Image src={gallery} fill={true} alt='Project'></Image>
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