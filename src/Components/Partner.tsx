'use client';

import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import partner from '../images/partner-1.png';

const Partner =()=>{
    var partnerSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <>
            <Container>
                    <h2 className="title blue--color">Our Partner</h2>
                    <Slider {...partnerSlider}>
                        <Row>
                            <div className="reviewPart p-0 text-center">
                                <Image src={partner} height={60} width={200} alt="partner"></Image>
                                <h3 className="reviewTitle secondary--color">Google</h3>
                            </div>
                        </Row>
                        <Row>
                            <div className="reviewPart p-0 text-center">
                                <Image src={partner} height={60} width={200} alt="partner"></Image>
                                <h3 className="reviewTitle secondary--color">Google</h3>
                            </div>
                        </Row>
                        <Row>
                            <div className="reviewPart p-0 text-center">
                                <Image src={partner} height={60} width={200} alt="partner"></Image>
                                <h3 className="reviewTitle secondary--color">Google</h3>
                            </div>
                        </Row>
                        <Row>
                            <div className="reviewPart p-0 text-center">
                                <Image src={partner} height={60} width={200} alt="partner"></Image>
                                <h3 className="reviewTitle secondary--color">Google</h3>
                            </div>
                        </Row>
                        <Row>
                            <div className="reviewPart p-0 text-center">
                                <Image src={partner} height={60} width={200} alt="partner"></Image>
                                <h3 className="reviewTitle secondary--color">Google</h3>
                            </div>
                        </Row>
                        
                    </Slider>
            </Container>
        </>
    )
}
export default Partner;