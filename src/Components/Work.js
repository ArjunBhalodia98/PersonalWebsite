import React from "react";
import "./Work.css";
import {Col, Container, Row} from "react-bootstrap";
import Alkami from "../Assests/Alkami_Logo.png";
import BOA from "../Assests/BOA_Logo.png";
import Modea from "../Assests/Modea_Logo.jpg";
import Footlevelers from "../Assests/FootLevelers_Logo.png";
import WorkBody from "./WorkBody";
import styled from "styled-components";

function Work(){

    const StyledH1 = styled.h1`
      line-heright: 1.5;
      letter-spacing: 1.5;
      font-family: "Merriweather";
      font-size: 50px;
      @media only screen and (max-width: 820px){
        font-size: 30px;
      }
    `;

    const alkamiJobDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const bankOfAmericaFullTimeJobDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const bankOfAmericaInternshipJobDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const footLevelersInternshipJobDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="main">
            <Container>
                <Row>
                    <Col>
                        <StyledH1>My Journey</StyledH1>
                    </Col>
                </Row>
                <Row id="row">
                    <Col lg={{ span: 6, offset: 3}} id="column">
                        <WorkBody CompanyLogo={Alkami} CompanyName="Alkami Technologies" JobDuration="January 2022 - Present" JobPosition="Software Engineer II" JobDescription={alkamiJobDescription}/>
                    </Col>
                </Row>
                <Row id="row">
                    <Col md="1" lg="6" id="column">
                        <WorkBody CompanyLogo={BOA} CompanyName="Bank of America" JobDuration="July 2021 - January 2022" JobPosition="Software Engineer - Performance and Capacity" JobDescription={bankOfAmericaFullTimeJobDescription}/>
                    </Col>
                    <Col xs md="1" lg="6" id="column">
                        <WorkBody CompanyLogo={Modea} CompanyName="Modea" JobDuration="September 2020 - April 2021" JobPosition="Part-Time Software Engineer" JobDescription={bankOfAmericaFullTimeJobDescription}/>
                    </Col>
                </Row>
                <Row id="row">
                    <Col md="1" lg="6" id="column">
                        <WorkBody CompanyLogo={BOA} CompanyName="Bank of America" JobDuration="May 2020 - August 2020" JobPosition="Software Engineer Intern" JobDescription={bankOfAmericaInternshipJobDescription}/>
                    </Col>
                    <Col xs md="1" lg="6" id="column">
                        <WorkBody CompanyLogo={Footlevelers} CompanyName="Foot Levelers" JobDuration="May 2019 - August 2019" JobPosition="Software Engineer Intern" JobDescription={footLevelersInternshipJobDescription}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work;