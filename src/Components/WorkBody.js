import React from "react";
import styled from "styled-components";


function WorkBody(props){

    const StyledImage = styled.img`
      width: 200px;
      border-radius: 50%;
      @media only screen and (max-width: 820px){
        width: 180px;
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

    const StyledH2 = styled.h2`
      line-height: 1.5;
      letter-spacing: 1.5;
      padding-top: 2%;
      font-size: 40px;
      font-weight: lighter;
      @media only screen and (max-width: 820px){
        font-size: 30px;
      }
    `;

    const StyledH3 = styled.h3`
      line-heright: 1.5;
      letter-spacing: 1.15;
      font-weight: lighter;
      font-style: oblique;
      font-size: 25px;
      @media only screen and (max-width: 820px){
        font-size: 20px;
      }
    `;

    const StyledH3JobPosition = styled.h3`
      line-heright: 1.5;
      letter-spacing: 1.15;
      font-weight: normal;
      font-size: 20px;
      @media only screen and (max-width: 820px){
        font-size: 15px;
      }
    `;

    return(
        <div>
            <StyledImage src={props.CompanyLogo}/>
            <StyledH2>{props.CompanyName}</StyledH2>
            <StyledH3>{props.JobDuration}</StyledH3>
            <StyledH3JobPosition>{props.JobPosition}</StyledH3JobPosition>
            <StyledParagraph>{props.JobDescription}</StyledParagraph>
        </div>
        )

}

export default WorkBody;