import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import graphics from '../images/graphics.png';
import photography from '../images/photography.png';
import seo from '../images/seo.png';
import web from '../images/web.png';

const Services =()=>{
    return (
        <>
            <Container>
                <h2 className="title">My Services</h2>
                <Row>
                    <Col lg={3} md={6} sm={6}>
                        <div className="serviceCard">
                            <div className="service_image">
                                <Image src={web} width={100} height={100} alt='icon'></Image>
                            </div>
                            <h2>Web Application</h2>
                            <p>I design static and dynamic web application as per your requirements</p>
                            <Link href="/pricing" className="third--btn">Order Now</Link>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className="serviceCard">
                            <div className="service_image">
                                <Image src={graphics} width={100} height={100} alt='icon'></Image>
                            </div>
                            <h2>Graphics Design</h2>
                            <p>I design static and dynamic web application as per your requirements</p>
                            <Link href="/pricing" className="third--btn">Order Now</Link>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className="serviceCard">
                            <div className="service_image">
                                <Image src={seo} width={100} height={100} alt='icon'></Image>
                            </div>
                            <h2>SEO</h2>
                            <p>I design static and dynamic web application as per your requirements</p>
                            <Link href="/pricing" className="third--btn">Order Now</Link>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className="serviceCard">
                            <div className="service_image">
                                <Image src={photography} width={100} height={100} alt='icon'></Image>
                            </div>
                            <h2>Stock Photography</h2>
                            <p>I design static and dynamic web application as per your requirements</p>
                            <Link href="/pricing" className="third--btn">Order Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Services;