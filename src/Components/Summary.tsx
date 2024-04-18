import { Col, Container, Row } from "react-bootstrap";

const Summary =()=>{
    return (
        <>
            <Container fluid={true} className="summaryFixed p-0">
                        <Container>
                            <Row>
                                <Col className="summaryContent" lg={12} md={12} sm={12}>
                                    <Row>
                                        <Col lg={3} md={6} sm={6} className="text-center">
                                            <h2>
                                                81+
                                            </h2>
                                            <h4>Total Projects</h4>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="text-center">
                                            <h2>
                                                29+
                                            </h2>
                                            <h4>Total Clients</h4>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="text-center">
                                            <h2>
                                                1506+
                                            </h2>
                                            <h4>Cup of Coffee</h4>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="text-center">
                                            <h2>
                                                3+
                                            </h2>
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