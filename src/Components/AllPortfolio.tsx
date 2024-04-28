'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import gallery from '../images/gallery1.jpg';
import photography from '../images/photography.webp';

const AllPortfolio: React.FC = () => {
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
                    {/* Web Development part ends */}



                    <Tab eventKey="profile" title="Graphics Design">
                        <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Logo Design</h4>
                                        <p>Logo design is the art of crafting visual identities that symbolize brands, businesses, or organizations. It involves creative fusion of typography, imagery, and color to evoke emotions, communicate messages, and establish memorable brand recognition.</p>
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
                                        <p>Banner and image design is the art of crafting visually striking graphics to convey messages, promote brands, or enhance digital content. It involves creative composition, typography, and color schemes to captivate audiences and leave a lasting impression.</p>
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
                                        <p>Icon design is the art of crafting visual symbols that communicate concepts, actions, or ideas succinctly and effectively. It involves balancing simplicity with clarity, ensuring icons are recognizable and intuitive across various digital platforms and contexts.</p>
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
                    {/* Graphics design part ends */}



                    <Tab eventKey="longer-tab" title="SEO">
                        <Row>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Site Ranking</h4>
                                        <p>Site Ranking SEO" refers to the strategies and techniques used to improve a website's visibility and position in search engine results pages (SERPs). It involves optimizing content, keywords, metadata, and technical aspects to enhance organic traffic and online presence.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={gallery} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Keyword Research</h4>
                                        <p>Keyword research is the cornerstone of SEO strategy, involving identifying search terms relevant to your content and audience. By analyzing search volume, competition, and intent, you can optimize your website to rank higher in search engine results, driving organic traffic and visibility.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    {/* SEO part ends */}



                    <Tab eventKey="contact" title="Photography">

                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 3}}>
                            <Masonry gutter={"16px"}>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={photography} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>ShutterStock</h4>
                                        <p>Shutterstock is a leading global platform offering high-quality stock photos, videos, and music tracks for creative projects. With a vast library of assets and user-friendly search functionality, Shutterstock provides essential resources for designers, marketers, and content creators worldwide.</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="https://www.shutterstock.com/g/martins+photography" target="_blank" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={photography} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>iStock</h4>
                                        <p>iStock is a leading online marketplace for royalty-free stock images, videos, illustrations, and audio. With a vast library of high-quality content curated by creatives worldwide, iStock empowers users to find the perfect assets for their projects, whether personal or commercial.</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="https://www.istockphoto.com/portfolio/Md-H-H-Martin" target="_blank" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={photography} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>500px</h4>
                                        <p>500px is a premier online platform for photographers to showcase and sell their work. With a global community of talented artists, it offers a visually stunning array of high-quality images spanning various genres, inspiring creativity and appreciation worldwide.</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="https://500px.com/p/expressive-capture" target="_blank" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={photography} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Dreamstime</h4>
                                        <p>Dreamstime is a leading stock photography platform, offering millions of high-quality images, illustrations, and videos for creative projects. With user-friendly search tools and diverse content, Dreamstime empowers designers, marketers, and content creators to find the perfect visuals for their projects.</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="https://www.dreamstime.com/martinsphotographybd_info" target="_blank" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mainCard">
                                    <div className="cardImage">
                                        <Image src={photography} fill={true} alt='Project'></Image>
                                    </div>
                                    <div className="cardBody">
                                        <h4>Depositphotos</h4>
                                        <p>Depositphotos is a leading stock photography platform offering millions of high-quality images, vectors, and videos. With diverse content and flexible licensing options, Depositphotos empowers creatives, businesses, and individuals to find the perfect visual assets for their projects with ease.</p>
                                    </div>
                                    <div className="cardButtons">
                                        <ul>
                                            <li><Link href="https://depositphotos.com/portfolio-79520150.html" target="_blank" className='red-link'>Link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Masonry>
                        </ResponsiveMasonry>
                    </Tab>
                    {/* Photography part ends */}
                </Tabs>
            </Container>
        </>
    )
}
export default AllPortfolio;