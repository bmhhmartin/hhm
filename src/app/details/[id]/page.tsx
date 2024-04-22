import CommonBanner from "@/Components/CommonBanner";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import projectDetails from "../../../images/gallery1.jpg";

export const metadata = {
    title: 'Md H H Martin | Project Details'
}

const ProjectDetails =()=>{
    return (
        <>
            <CommonBanner></CommonBanner>
            <Container>
                <h2 className="title text-center">Project Name: Lorem ipsum dolor sit amet.</h2>
                <Row>
                    <Col lg={6} md={12}>
                        <Image src={projectDetails} width={700} height={300} alt="Project" className="img-fluid" ></Image>
                    </Col>
                    <Col lg={6} md={12}>
                        <h3 className="projectSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa praesentium adipisci tenetur nemo enim totam officia ducimus mollitia itaque.</h3>
                        <p className="details text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, pariatur natus quasi iste atque delectus quaerat voluptates error. Ratione repellat beatae quis cumque ex saepe molestias illo! Iure atque fuga non consectetur. Omnis dignissimos voluptatem ea numquam, ratione quia asperiores vitae reiciendis vel eveniet alias nulla exercitationem esse autem modi eos consequuntur officia repellendus! Officia dolor placeat dolore error possimus ratione. Ab porro, saepe recusandae cum facilis sit vero ipsam vitae necessitatibus atque sapiente voluptatem voluptates excepturi accusamus, incidunt quaerat! Reiciendis numquam quidem perferendis animi delectus fugiat voluptates natus ducimus aliquam temporibus unde molestias dignissimos impedit vero totam, maiores maxime soluta assumenda, quibusdam sed obcaecati provident magnam eius? Soluta libero ullam voluptatibus quidem blanditiis dolore tenetur. Quas quo mollitia quidem. Porro praesentium exercitationem, molestiae hic aperiam enim. Alias numquam obcaecati distinctio! Consectetur repudiandae officiis temporibus aliquid nesciunt commodi. Assumenda veniam, ipsa deserunt quo, deleniti tempora similique dolores blanditiis dolor at, quos eos sequi. Corporis, in. Dolore, quis odit eius exercitationem accusantium laborum optio, harum esse assumenda magnam sequi consequatur doloribus ullam. Sunt cumque obcaecati doloremque dolorem ad quas vitae explicabo illo adipisci! Incidunt dicta quasi, beatae tenetur dignissimos natus error soluta dolorem est quae nam in, eius enim quisquam voluptatibus?
                        </p>
                        <Link href="#" target="_blank" className="secondary--btn">Live Link</Link>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default ProjectDetails;