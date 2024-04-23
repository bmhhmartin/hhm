'use client';

import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import client from '../images/client.png';

const ClientReview =()=>{
    var clientSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
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
                    <h3 className="title">Client Review</h3>
                    <div className="slider-container">
                        <Slider {...clientSlider}>
                            <div className="reviewPart text-center">
                                <Image src={client} height={200} width={200} alt="client"></Image>
                                <h3 className="reviewTitle">Alex Robberts</h3>
                                <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                            </div>
                            <div className="reviewPart text-center">
                                <Image src={client} height={200} width={200} alt="client"></Image>
                                <h3 className="reviewTitle">Alex Robberts</h3>
                                <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                            </div>
                            <div className="reviewPart text-center">
                                <Image src={client} height={200} width={200} alt="client"></Image>
                                <h3 className="reviewTitle">Alex Robberts</h3>
                                <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                            </div>
                            <div className="reviewPart text-center">
                                <Image src={client} height={200} width={200} alt="client"></Image>
                                <h3 className="reviewTitle">Alex Robberts</h3>
                                <p className="reviewDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere volupt.</p>
                            </div>
                            
                        </Slider>
                    </div>
                    
            </Container>
        </>
    )
}
export default ClientReview;