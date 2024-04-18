"use client";

import Link from "next/link";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const PricingList =()=>{
    return (
        <>
            <Container>
                    <h2 className="title">Pricing List</h2>
                    <Tabs defaultActiveKey="Web Development" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Web Development" title="Web Development">
                            <Row>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Silver</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">80</span>
                                                {/*<span className="duration">/month</span>*/}
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Dynamic Site</li>
                                            <li>Technology: WordPress</li>
                                            <li>Source Code Provide</li>
                                            <li>30 Days free Service</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                             <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable blue">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Golden</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">150</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Dynamic Site</li>
                                            <li>Technology: React+Rest API</li>
                                            <li>Source Code Provide</li>
                                            <li>30days free Service</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable pink">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Diamond</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">300</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Dynamic Site</li>
                                            <li>Technology: React+Rest API,Laravel</li>
                                            <li>Source Code Provide</li>
                                            <li>60days free Service</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="Web Design" title="Web Design">
                            <Row>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Silver</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">25</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Static Site</li>
                                            <li>Technology: HTML,CSS,Bootstrap</li>
                                            <li>Source Code Provide</li>
                                            <li>1 page Site</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable blue">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Golden</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">60</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Static Site</li>
                                            <li>Technology: HTML,CSS,Bootstrap</li>
                                            <li>Source Code Provide</li>
                                            <li>Max 5 pages</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable pink">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Diamond</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">100</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Full Ecommerce Site</li>
                                            <li>Technology: HTML,CSS,Bootstrap, JQuery</li>
                                            <li>Source Code Provide</li>
                                            <li>Max 15 pages</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="Graphic Design" title="Graphic Design">
                            <Row>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Silver</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">35</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Poster Design</li>
                                            <li>Delivery: 3 Days</li>
                                            <li>Provide Source File</li>
                                            <li>JPG,PNG,EPS File</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable blue">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Golden</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">50</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Business Card Design</li>
                                            <li>Delivery: 3 Days</li>
                                            <li>Provide Source File</li>
                                            <li>JPG,PNG,EPS File</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable pink">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Diamond</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">70</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Logo Design</li>
                                            <li>Delivery: 3 Days</li>
                                            <li>Provide Source File</li>
                                            <li>JPG,PNG,EPS File</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="SEO" title="SEO">
                            <Row>
                                <Col lg={4} md={4} sm={6}>
                                    <div className="pricingTable">
                                        <div className="pricingTable-header">
                                            <h3 className="pricingTitle">Silver</h3>
                                            <h4 className="pricingSubTitle">Start From</h4>
                                            <div className="price-value">
                                                <span className="currency">$</span>
                                                <span className="amount">50</span>
                                                <span className="duration">/month</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>Keyword Provide</li>
                                            <li>Domain Selection</li>
                                            <li>Image optimization</li>
                                            <li>Delivery: 3 Months</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pricingTable-signup">
                                            <Link href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="Mobile Apps" title="Mobile Apps">
                            <Row>
                                <Col>
                                    <p className="subTitle text-center">Coming Soon.....</p>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Container>

        </>
    )
}
export default PricingList;