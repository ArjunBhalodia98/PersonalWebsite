import React from "react";
import "./Testimonials.css";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import {Col, Container, Row} from "react-bootstrap";


export default function Testimonials(){
    const testimonial = [
        {
            content:
                "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
            author: "Sarah M., Director of Events"
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
        <div>
            <OwlCarousel
                className="owl-theme"
                items="1"
                autoplay={true}
                center={true}
                nav
                dots
                loop>
                {testimonial.map((c, index) => {
                    return (
                        <div className="item">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col>
                                        <p>{c.content}</p>
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