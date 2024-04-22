import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import martin from "../images/me.png";
import VideoButton from "./UI/VideoButton";
import VideoCard from "./UI/VideoCard";

const TopBanner =()=>{
    return (
        <>
            <Container fluid={true} className="topFixedBanner p-0">
                <div className="topBannerOverlay">
                    <Container className="visibleProfile">
                        <div className="fullDetails">
                            <div className="imageCover">
                                <Image src={martin} fill={true} alt="person" className="myPhoto img-fluid"></Image>
                            </div>
                            <div className="topContent text-left">
                                <h1 className="topTitle">Md H H Martin</h1>
                                <h4 className="topSubTitle">Software Engineer</h4>
                                <p className="topDes">I am professional Software Engineer. I completed my BSc in Computer Science and Engineering from Daffodil International University. Now I am working in SELISE Digital Platforms as a Software Engineer. SELISE is a Multinational Software Company which situated 6 countries over the world. Its head quarter situated.........</p>
                                <div className="contentList">
                                    <ul>
                                        <li><Link href="/about" className="primary--btn">Read More</Link></li>
                                        <li><VideoButton></VideoButton></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <VideoCard></VideoCard>
            </Container>
        </>
    )
}
export default TopBanner;