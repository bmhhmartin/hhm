import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';
import partner from '../images/partner-1.png';

const Partner =()=>{
    return (
        <>
            <Container>
                    <h2 className="title">Partner</h2>
                    <Row>
                        <div className="reviewPart text-center">
                            <Image src={partner} height={60} width={200} alt="partner"></Image>
                            <h3 className="reviewTitle">Google</h3>
                            <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                        </div>
                    </Row>
                    <Row>
                        <div className="reviewPart text-center">
                            <Image src={partner} height={60} width={200} alt="partner"></Image>
                            <h3 className="reviewTitle">Google</h3>
                            <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                        </div>
                    </Row>
                    
            </Container>
        </>
    )
}
export default Partner;