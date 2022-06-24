import React from "react";
import email from "../Assests/email.png";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";


export default function Footer() {

    const StyledImage = styled.img`
        width: 20px;
    `;

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3}}>
                        <h1> Here</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}