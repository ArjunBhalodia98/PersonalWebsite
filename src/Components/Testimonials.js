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
                "I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.",
            author: "Sarah M., CCHS Foundation"
        },
        {
            content:
                "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
            author: "Alexander B., Pan-Mass Challenge"
        },
        {
            content:
                "MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.",
            author: "Amy C., One Less Orphan Fund"
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