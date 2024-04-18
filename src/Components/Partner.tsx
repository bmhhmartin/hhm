import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';
import client from '../images/client.png';

const Partner =()=>{
    return (
        <>
            <Container>
                    <h2 className="title">Partner</h2>
                    <Row>
                    <div className="reviewPart text-center">
                        <Image src={client} height={200} width={200} alt="client"></Image>
                        <h3 className="reviewTitle">Alex Robberts</h3>
                        <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                    </div>
                    </Row>
                    <Row>
                    <div className="reviewPart text-center">
                        <Image src={client} height={200} width={200} alt="client"></Image>
                        <h3 className="reviewTitle">Jonathan Flox</h3>
                        <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt</p>
                    </div>
                    </Row>
                    <Row>
                    <div className="reviewPart text-center" >
                        <Image src={client} height={200} width={200} alt="client"></Image>
                        <h3 className="reviewTitle">Maria Saripov</h3>
                        <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt</p>
                    </div>
                    </Row>
                    <Row>
                    <div className="reviewPart text-center" >
                        <Image src={client} height={200} width={200} alt="client"></Image>
                        <h3 className="reviewTitle">Alex Robberts</h3>
                        <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                    </div>
                    </Row>
                    <Row>
                    <div className="reviewPart text-center" >
                        <Image src={client} height={200} width={200} alt="client"></Image>
                        <h3 className="reviewTitle">Jonathan Flox</h3>
                        <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt</p>
                    </div>
                    </Row>
                    <Row>
                    <div className="reviewPart text-center" >
                        <Image src={client} height={200} width={200} alt="client"></Image>
                        <h3 className="reviewTitle">Maria Saripov</h3>
                        <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt</p>
                    </div>
                    </Row>
            </Container>
        </>
    )
}
export default Partner;