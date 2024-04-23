import { Col, Container, Row } from "react-bootstrap";
import { BsLaptopFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { RiRestartFill } from "react-icons/ri";
import { SiTestcafe } from "react-icons/si";


const WorkingProgress =()=>{
    return (
        <>
         <Container>
            <h3 className="title">My Working Process</h3>
            <Row>
                <Col lg={3} md={3} sm={6}>
                    <div className="processStep stepFirst">
                        <RiRestartFill/>
                        <h3>Plan</h3>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6}>
                    <div className="processStep stepSecond">
                        <BsLaptopFill />
                        <h3>Design</h3>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6}>
                    <div className="processStep stepThird">
                        <FaLaptopCode />
                        <h3>Development</h3>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6}>
                    <div className="processStep stepFour">
                        <SiTestcafe/>
                        <h3>Test</h3>
                    </div>
                </Col>
            </Row>
        </Container>

        </>
    )
}
export default WorkingProgress;