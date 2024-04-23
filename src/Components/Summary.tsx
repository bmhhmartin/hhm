"use client";

import { Col, Container, Row } from "react-bootstrap";
import CountUp from 'react-countup';

const Summary =()=>{
    return (
        <>
            <Container fluid={true} className="summaryFixed p-0">
                <Container>
                    <Row>
                        <Col className="summaryContent" lg={12} md={12} sm={12}>
                            <Row>
                                <Col lg={3} md={6} sm={6} className="text-center">
                                    <h3>
                                        <CountUp start={0} end={81}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp>
                                        +   
                                    </h3>
                                    <h4>Total Projects</h4>
                                </Col>
                                <Col lg={3} md={6} sm={6} className="text-center">
                                    <h3>
                                        <CountUp start={0} end={29}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp>
                                        +
                                    </h3>
                                    <h4>Total Clients</h4>
                                </Col>
                                <Col lg={3} md={6} sm={6} className="text-center">
                                    <h3>
                                        <CountUp start={0} end={564}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp>
                                        +
                                    </h3>
                                    <h4>Cup of Coffee</h4>
                                </Col>
                                <Col lg={3} md={6} sm={6} className="text-center">
                                    <h3>
                                    <CountUp start={0} end={3}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp>
                                    </h3>
                                    <h4>Running Projects</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Summary;