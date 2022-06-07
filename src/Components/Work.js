import React from "react";
import styled from "styled-components";
import "./Work.css";
import {Col, Container, Row} from "react-bootstrap";
import Suitcase from "../Assests/suitcase.png";
import Alkami from "../Assests/Alkami_Logo.png";

function Work(){

    const StyledImage = styled.img`
      width: 120px;
      outline: 5px solid black;
      border-radius: 50%;
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

    return (
        <div className="main">
            <Container>
                <Row>
                    <Col>
                        <img src={Suitcase} width="180"/>
                    </Col>
                </Row>
                <Row id="row">
                    <Col>
                        <StyledImage src={Alkami}/>
                        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledParagraph>
                    </Col>
                </Row>
                <Row id="row">
                    <Col md="1" lg="6">
                        <StyledImage src={Alkami}/>
                        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledParagraph>
                    </Col>
                    <Col xs md="1" lg="6">
                        <StyledImage src={Alkami}/>
                        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledParagraph>
                    </Col>
                </Row>
                <Row id="row">
                    <Col md="1" lg="6">
                        <StyledImage src={Alkami}/>
                        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledParagraph>
                    </Col>
                    <Col xs md="1" lg="6">
                        <StyledImage src={Alkami}/>
                        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledParagraph>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work;