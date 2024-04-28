import { Col, Container, Row } from "react-bootstrap";
import { FaArtstation, FaBootstrap, FaCss3Alt, FaDatabase, FaElementor, FaGitAlt, FaHtml5, FaJsSquare, FaLaravel, FaPencilRuler, FaPhp, FaQrcode, FaReact, FaSass, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Technology =()=>{
    return (
        <>
            <Container>
                    <h3 className="title">Technology I used</h3>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Next JS</h3>
                                <div className="progress next">
                                    <div className="progress-bar" style={{width: "75%", background:"#232323"}}>
                                        <span className="progress-icon"><SiNextdotjs /></span>
                                        <div className="progress-value"><span>75</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">React</h3>
                                <div className="progress react">
                                    <div className="progress-bar" style={{width: "75%", background:"#00D8FF"}}>
                                        <span className="progress-icon"><FaReact /></span>
                                        <div className="progress-value"><span>75</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">JavaScript</h3>
                                <div className="progress javascript">
                                    <div className="progress-bar" style={{width: "85%", background:"#F7DF1E"}}>
                                        <span className="progress-icon"><FaJsSquare/></span>
                                        <div className="progress-value"><span>85</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">ReST API</h3>
                                <div className="progress api">
                                    <div className="progress-bar" style={{width: "85%", background:"#55A9FF"}}>
                                        <span className="progress-icon"><FaDatabase /></span>
                                        <div className="progress-value"><span>85</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Laravel Lumen</h3>
                                <div className="progress lumen">
                                    <div className="progress-bar" style={{width: "75%", background:"#DE4335"}}>
                                        <span className="progress-icon"><FaLaravel/></span>
                                        <div className="progress-value"><span>75</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">MySQL</h3>
                                <div className="progress mysql">
                                    <div className="progress-bar" style={{width: "85%", background:"#FFA518"}}>
                                        <span className="progress-icon fas"><FaDatabase/></span>
                                        <div className="progress-value"><span>85</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Wordpress</h3>
                                <div className="progress wp">
                                    <div className="progress-bar" style={{width: "85%", background:"#207196"}}>
                                        <span className="progress-icon"><FaWordpress /></span>
                                        <div className="progress-value"><span>85</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">PHP</h3>
                                <div className="progress php">
                                    <div className="progress-bar" style={{width:"75%", background:"#8993BE"}}>
                                        <span className="progress-icon"><FaPhp/></span>
                                        <div className="progress-value"><span>75</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Elementor</h3>
                                <div className="progress elementor">
                                    <div className="progress-bar" style={{width: "85%", background:"#D63362"}}>
                                        <span className="progress-icon"><FaElementor/></span>
                                        <div className="progress-value"><span>85</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Git</h3>
                                <div className="progress git">
                                    <div className="progress-bar" style={{width: "90%", background:"#000000"}}>
                                        <span className="progress-icon"><FaGitAlt/></span>
                                        <div className="progress-value"><span>90</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">SASS</h3>
                                <div className="progress sass">
                                    <div className="progress-bar" style={{width: "95%", background:"#CD669A"}}>
                                        <span className="progress-icon"><FaSass/></span>
                                        <div className="progress-value"><span>95</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Tailwind CSS</h3>
                                <div className="progress tailwind">
                                    <div className="progress-bar" style={{width:"95%", background:"#00d0ff"}}>
                                        <span className="progress-icon"><SiTailwindcss/></span>
                                        <div className="progress-value"><span>95</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Bootstrap</h3>
                                <div className="progress bootstrap">
                                    <div className="progress-bar" style={{width:"95%", background:"#6D11EE"}}>
                                        <span className="progress-icon"><FaBootstrap/></span>
                                        <div className="progress-value"><span>95</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">HTML5</h3>
                                <div className="progress html">
                                    <div className="progress-bar" style={{width: "95%", background:"#E44D26"}}>
                                        <span className="progress-icon"><FaHtml5/></span>
                                        <div className="progress-value"><span>95</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">CSS3</h3>
                                <div className="progress css">
                                    <div className="progress-bar" style={{width:"95%", background:"#f7810e"}}>
                                        <span className="progress-icon"><FaCss3Alt/></span>
                                        <div className="progress-value"><span>95</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">JQuery</h3>
                                <div className="progress jquery">
                                    <div className="progress-bar" style={{width:"85%", background:"#1D2D39"}}>
                                        <span className="progress-icon"><FaQrcode/></span>
                                        <div className="progress-value"><span>85</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Adobe Photoshop</h3>
                                <div className="progress photoshop">
                                    <div className="progress-bar" style={{width: "90%", background:"#2D6BD6"}}>
                                        <span className="progress-icon"><FaPencilRuler/></span>
                                        <div className="progress-value"><span>90</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="progressList">
                                <h3 className="progress-title">Adobe Illustrator</h3>
                                <div className="progress illustrator">
                                    <div className="progress-bar" style={{width: "80%", background:"#FF7F18"}}>
                                        <span className="progress-icon"><FaArtstation/></span>
                                        <div className="progress-value"><span>80</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

        </>
    )
}
export default Technology;