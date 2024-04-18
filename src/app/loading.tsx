import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import loader from "../images/loader.svg";

const Loading =()=>{
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Image src={loader} width={200} height={200} alt="loader"></Image>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Loading;