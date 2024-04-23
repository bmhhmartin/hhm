import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";


const MyResume =()=>{
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="d-inline-grid">
                        <div className="part pt-3">
                            <h3 className="subTitle">Skills Details</h3>
                            <div className="step">
                                <h3 className="cardTitle"><FaStar />Next JS</h3>
                                <p className="details text-justify">Next JS Route Feature, Next Authentication, CSR, SSR</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><FaStar />React JS</h3>
                                <p className="details text-justify">React JS, Fetch API, ReactBootstrap, Tailwind CSS, ES6, Single page application, React Plugins</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><FaStar />Web Design</h3>
                                <p className="details text-justify">HTML5, CSS3, JavaScript, JQuery, Bootstrap 4, font-awesome 5, SASS, PSD to HTML, Wireframe, WordPress Customize, Git</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><FaStar />Web Development</h3>
                                <p className="details text-justify">React JS, API Create by Laravel Lumen,PHP, MySQL, Codeigniter Framework</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><FaStar />Graphic Design</h3>
                                <p className="details text-justify">Adobe Photoshop, Adobe Illustrator.  </p>
                            </div>
                            <div className="step">
                                <h3 className="cardTitle"><FaStar />SEO</h3>
                                <p className="details text-justify">Keyword research, domain selection, Image optimization, rules of title, meta description, URL.</p>
                            </div>
                            <div className="step">
                                <h3 className="cardTitle"><FaStar />Digital Photography</h3>
                                <p className="details text-justify">Shutter speed, Aparture, Focus, Exposure, Framing, Lighting Condition</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="d-inline-grid">
                        <div className="part pt-3">
                            <h2 className="subTitle">Training & Course</h2>
                            <div className="step">
                                <h3 className="cardTitle"><BsBookmarkStarFill/>Next JS</h3>
                                <p className="details text-justify">I completed professional Next JS Course from <strong><Link href="https://ostad.app/" target="_blank">Ostad Platform</Link></strong>. Its duration time is 6 months</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><BsBookmarkStarFill/>React JS</h3>
                                <p className="details text-justify">I completed professional React JS Course from <strong><Link href="https://www.udemy.com/" target="_blank">Udemy</Link></strong>. Its duration time is 5 months</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><BsBookmarkStarFill/>Web Design</h3>
                                <p className="details text-justify">I completed Professional Web Design Training from <strong><Link href="https://www.creativeitinstitute.com/" target="_blank">Creative IT Institute</Link></strong>.  Its duration time is 5 months. I am certified from here.</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><BsBookmarkStarFill/>Web Development</h3>
                                <p className="details text-justify">I completed Professional Web Development Training from <strong><Link href="https://www.udemy.com/" target="_blank">Udemy</Link></strong>. Its duration time is 4 months. I am certified from here.</p>
                            </div>

                            <div className="step">
                                <h3 className="cardTitle"><BsBookmarkStarFill/>Graphic Design</h3>
                                <p className="details text-justify">I completed Professional Graphic Development Training from  <strong><Link href="http://dipti.com.bd/">Daffodil International Professional Training Institution</Link></strong>. Its duration time is 3 months. I am certified from here.</p>
                            </div>
                            <div className="step">
                                <h3 className="cardTitle"><BsBookmarkStarFill/>SEO</h3>
                                <p className="details text-justify">I completed Professional SEO Course from <strong><Link href="https://www.udemy.com/" target="_blank">Udemy</Link></strong>. Its duration time is 3 months.</p>
                            </div>
                            <div className="step">
                                <h3 className="cardTitle"><BsBookmarkStarFill/>Digital Photography</h3>
                                <p className="details text-justify">I completed Professional Photography Course from <strong><Link href="https://www.udemy.com/" target="_blank">Udemy</Link></strong>. I am also certified from <strong><Link href="https://alison.com/" target="_blank">Alison</Link></strong></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default MyResume;