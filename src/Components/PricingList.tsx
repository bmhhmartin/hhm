"use client";

import Link from "next/link";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";


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
                                            <li><FaCheck/>Dynamic Site</li>
                                            <li><FaCheck/>Technology: WordPress</li>
                                            <li><FaCheck/>Source Code Provide</li>
                                            <li><FaCheck/>30 Days free Service</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Dynamic Site</li>
                                            <li><FaCheck/>Technology: React+Rest API</li>
                                            <li><FaCheck/>Source Code Provide</li>
                                            <li><FaCheck/>30days free Service</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Dynamic Site</li>
                                            <li><FaCheck/>Technology: React+Rest API,Laravel</li>
                                            <li><FaCheck/>Source Code Provide</li>
                                            <li><FaCheck/>60days free Service</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Static Site</li>
                                            <li><FaCheck/>Technology: HTML,CSS,Bootstrap</li>
                                            <li><FaCheck/>Source Code Provide</li>
                                            <li><FaCheck/>1 page Site</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Static Site</li>
                                            <li><FaCheck/>Technology: HTML,CSS,Bootstrap</li>
                                            <li><FaCheck/>Source Code Provide</li>
                                            <li><FaCheck/>Max 5 pages</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Full Ecommerce Site</li>
                                            <li><FaCheck/>Technology: HTML,CSS,Bootstrap, JQuery</li>
                                            <li><FaCheck/>Source Code Provide</li>
                                            <li><FaCheck/>Max 15 pages</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/><FaCheck/>Poster Design</li>
                                            <li><FaCheck/><FaCheck/>Delivery: 3 Days</li>
                                            <li><FaCheck/><FaCheck/>Provide Source File</li>
                                            <li><FaCheck/><FaCheck/>JPG,PNG,EPS File</li>
                                            <li><FaCheck/><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Business Card Design</li>
                                            <li><FaCheck/>Delivery: 3 Days</li>
                                            <li><FaCheck/>Provide Source File</li>
                                            <li><FaCheck/>JPG,PNG,EPS File</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Logo Design</li>
                                            <li><FaCheck/>Delivery: 3 Days</li>
                                            <li><FaCheck/>Provide Source File</li>
                                            <li><FaCheck/>JPG,PNG,EPS File</li>
                                            <li><FaCheck/>24/7 Support</li>
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
                                            <li><FaCheck/>Keyword Provide</li>
                                            <li><FaCheck/>Domain Selection</li>
                                            <li><FaCheck/>Image optimization</li>
                                            <li><FaCheck/>Delivery: 3 Months</li>
                                            <li><FaCheck/>24/7 Support</li>
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