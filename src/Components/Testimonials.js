import React from "react";
import "./Testimonials.css";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";


export default function Testimonials(){

    const StyledH1 = styled.h1`
      line-heright: 1.5;
      letter-spacing: 1.5;
      font-family: "Merriweather";
      font-size: 50px;
      @media only screen and (max-width: 820px){
        font-size: 30px;
      }
    `;

    const StyledParagraph = styled.p`
        font-size: x-large;
      padding-top: 2em;
      @media only screen and (max-width: 820px){
        font-size: medium;
        padding-left: 0;
        padding-right: 0;
      }
    `;

    const StyledH3 = styled.h3`
      line-heright: 1.5;
      letter-spacing: 1.15;
      font-weight: lighter;
      font-style: oblique;
      font-size: 20px;
      @media only screen and (max-width: 820px){
        font-size: 20px;
      }
    `;

    const testimonial = [
        {
            content:
                "Arjun was a great teammate and a genuine joy to work with. He’s persistent, creative and always stays positive during tough problem solving. Can not recommend him enough and wish I got to work with him more.",
            author: "Christopher Wood, Senior Software Engineer - Modea"
        },
        {
            content:
                "I am impressed by the quality of work and professionalism I received from Arjun. He was right on time, energetic, and innovative in his commitments. Thanks to him, we could achieve our goals on time and finish numerous financial integrations and features. I'm looking forward to continuing working with him in the future.",
            author: "Amir Anjomshoa, Team Tech Lead - Alkami Technologies"
        }
    ];

    return (
        <div className="testimonialSection">
            <StyledH1>Testimonials</StyledH1>
            <OwlCarousel
                className="owl-theme"
                items="1"
                autoplay={true}
                center={true}
                nav
                dots
                loop>
                {testimonial.map((c) => {
                    return (
                        <div className="item">
                            <Container>
                                <Row>
                                    <Col lg={{ span: 8, offset: 2}}>
                                        <StyledParagraph>{c.content}</StyledParagraph>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col>
                                        <StyledH3>{c.author}</StyledH3>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    );
                })}
            </OwlCarousel>
        </div>
    );
}