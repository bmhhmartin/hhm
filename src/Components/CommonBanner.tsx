"use client";
import { usePathname } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";

const CommonBanner =()=>{

    const pathName = usePathname();
    console.log(pathName);
    
    return (
        <>
            <Container fluid={true} className="allPageBanner p-0">
                <div className="allPageOverlay">
                    <Container className="bannerContent">
                        <Row>
                            <Col className="text-center">
                                <h4 className="bannerSub">{pathName} Page</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    )
}
export default CommonBanner;