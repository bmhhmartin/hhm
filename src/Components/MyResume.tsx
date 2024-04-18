import { Col, Container, Row } from "react-bootstrap";

const MyResume =()=>{
    return (
        <>
            <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="d-inline-grid">
                            <div className="part pt-3">
                                <h2 className="subTitle">Skills Details</h2>
                                <div className="step">
                                    <h3 className="cardTitle"><i className="fab fa-react mr-2"></i>React Application</h3>
                                    <p className="details text-justify">React JS, Fetch API, React bootstrap, ES6, Single page application, React Plugins</p>
                                </div>

                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-globe mr-2"></i>Web Design</h3>
                                    <p className="details text-justify">HTML5, CSS3, JavaScript, JQuery, Bootstrap 4, font-awesome 5, SASS, PSD to HTML, Wireframe, WordPress Customize, Git</p>
                                </div>

                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-globe-americas mr-2"></i>Web Development</h3>
                                    <p className="details text-justify">React JS, API Create by Laravel Lumen,PHP, MySQL, Codeigniter Framework</p>
                                </div>

                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-paint-brush mr-2"></i>Graphic Design</h3>
                                    <p className="details text-justify">Adobe Photoshop, Adobe Illustrator.  </p>
                                </div>
                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-atlas mr-2"></i>SEO</h3>
                                    <p className="details text-justify">Keyword research, domain selection, Image optimization, rules of title, meta description, URL.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-inline-grid">
                            <div className="part pt-3">
                                <h2 className="subTitle">Training & Course</h2>
                                <div className="step">
                                    <h3 className="cardTitle"><i className="fab fa-react mr-2"></i>React JS</h3>
                                    <p className="details text-justify">I completed professional React JS Course from <strong><a href="https://www.udemy.com/" target="_blank">Udemy</a></strong>. Its duration time is 5 months</p>
                                </div>

                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-globe mr-2"></i>Web Design</h3>
                                    <p className="details text-justify">I completed Professional Web Design Training from <strong><a
                                        href="https://www.creativeitinstitute.com/" target="_blank">Creative IT Institute</a></strong>.  Its duration time is 5 months. I am certified from here.</p>
                                </div>

                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-globe-americas mr-2"></i>Web Development</h3>
                                    <p className="details text-justify">I completed Professional Web Development Training from <strong><a href="https://www.udemy.com/" target="_blank">Udemy</a></strong>. Its duration time is 4 months. I am certified from here.</p>
                                </div>

                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-paint-brush mr-2"></i>Graphic Design</h3>
                                    <p className="details text-justify">I completed Professional Graphic Development Training from  <strong><a href="http://dipti.com.bd/">Daffodil International Professional Training Institution</a></strong>. Its duration time is 3 months. I am certified from here.</p>
                                </div>
                                <div className="step">
                                    <h3 className="cardTitle"><i className="fas fa-atlas mr-2"></i>SEO</h3>
                                    <p className="details text-justify">I completed Professional SEO Course from <strong><a href="https://www.udemy.com/" target="_blank">Udemy</a></strong>. Its duration time is 3 months.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

        </>
    )
}
export default MyResume;