import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import gallery from '../images/gallery1.jpg';

const RecentProjects =()=>{
    return (
        <>
            <Container>
                    <h2 className="title">Recent Projects</h2>
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
                </Container>
        </>
    )
}
export default RecentProjects;