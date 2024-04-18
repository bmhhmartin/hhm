import { Col, Container, Row } from "react-bootstrap";

const Summary =()=>{
    return (
        <>
            <Container fluid={true} className="summaryFixed p-0">
                        <Container>
                            <Row>
                                <Col className="summaryContent" lg={12} md={12} sm={12}>
                                    <Row>
                                        <Col className="text-center">
                                            <h1>
                                                10
                                            </h1>
                                            <h4>Total Projects</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col className="text-center">
                                            <h1>
                                                20
                                            </h1>
                                            <h4>Total Clients</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col className="text-center">
                                            <h1>
                                                30
                                            </h1>
                                            <h4>Total Line Code</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col className="text-center">
                                            <h1>
                                                40
                                            </h1>
                                            <h4>Running Projects</h4>
                                            <hr className="bg-white w-25" />
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