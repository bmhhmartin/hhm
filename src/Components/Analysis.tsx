import { Col, Container, Row } from 'react-bootstrap';

const Analysis =()=>{
    return (
        <>
            <Container>
                    <h2 className="title">Technology Used</h2>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            Graph
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify details">To build native android apps i use Java as well
                                as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database
                                for relational database system. To build NoSQL application i use MongoDB. Firebase database system
                                is used where it is necessary to provide realtime data flow facilities.
                            </p>
                            
                            <p className="text-justify details"> I always build dynamic application. Admin panel is the heart of such
                                kinds of application. I always try to provide sufficient features in admin panel to dominate application.
                                According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                            </p>

                            <p className="text-justify details">Application security is a big deal for commercial application. I always
                                ensure security portion of my application, moreover i build a security alert system, to notify admin when
                                his system at risk.
                            </p>

                        </Col>
                    </Row>
                </Container>
        </>
    )
}
export default Analysis;