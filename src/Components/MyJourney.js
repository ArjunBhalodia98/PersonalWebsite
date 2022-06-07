import React from "react";
import styled from "styled-components";
import "./MyJourney.css"
import {Container, Row, Col} from "react-bootstrap";
import WorkBody from "./WorkBody";
import Alkami from "../Assests/Alkami_Logo.png";
import User from "../Assests/User.png";

function MyJourney(){

    const StyledImage = styled.img`
      width: 200px;
      border-radius: 50%;
      @media only screen and (max-width: 820px){
        width: 180px;
      }
    `;

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
      padding-top: 10%;
        font-size: x-large;
      @media only screen and (max-width: 820px){
        font-size: medium;
      }
    `;

    return (
        <div className="body">
            <Container>
                <Row>
                    <Col>
                        <StyledH1>About Me</StyledH1>
                        <StyledImage src={User}/>
                    </Col>
                </Row>
                <Row >
                    <Col lg={{ span: 6, offset: 3}}>
                        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledParagraph>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyJourney