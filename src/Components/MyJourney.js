import React from "react";
import styled from "styled-components";
import "./MyJourney.css"
import User from "../Assests/User.png"
import {Container, Row, Col} from "react-bootstrap";

function MyJourney(){

    const StyledH1 = styled.h1`
      line-heright: 1.5;
      letter-spacing: 1.5;
      font-family: "Merriweather";
      margin-bottom: 0;
      font-size: 50px;
      @media only screen and (max-width: 820px){
        font-size: 30px;
      }
    `;

    const StyledParagraph = styled.p`
        font-size: x-large;
      @media only screen and (max-width: 820px){
        font-size: medium;
      }
    `;

    return (
        <div className="body">
            <img src={User} width="150"/>

            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledParagraph>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyJourney