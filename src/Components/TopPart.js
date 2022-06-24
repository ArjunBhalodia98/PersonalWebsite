import React from 'react';
import styled from "styled-components";
import './TopPart.css'
import Typed from 'react-typed';
import Background_Image from "../Assests/Background_Image.jpg";
import { Parallax, Background } from 'react-parallax';

// import { Parallax, Background } from "react-parallax";

function TopPart() {

    const StyledDiv = styled.div`
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      height: 100vh;
      @media only screen and (max-width: 820px){
        background-position: center;
      }
    `;

    const BodyDiv = styled.div`
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media only screen and (max-width: 820px){
        top: 60%;
        left: 50%;
      }
    `;

    const StyledH1 = styled.h1`
      line-heright: 1.5;
      letter-spacing: 1.5;
      font-family: "Merriweather";
      color: white;
      font-size: 50px;
      @media only screen and (max-width: 820px){
        font-size: 30px;
      }
    `;

    const StyledH2 = styled.h2`
      line-heright: 1.5;
      letter-spacing: 1.5;
      font-family: "Merriweather";
      font-size: 20px;
      color: white;
      @media only screen and (max-width: 820px){
        font-size: 15px;
      }
    `;

    const StyledH3 = styled.h3`
      line-heright: 1.5;
      letter-spacing: 1.15;
      font-weight: bold;
      font-family: "Lato";
      color: white;
      font-size: 30px;
      @media only screen and (max-width: 820px){
        font-size: 20px;
      }
    `;

    return (
        <div className="TopPart">
            <Parallax bgImage={Background_Image} strength={400} className="Parallax">
                <StyledDiv>
                    <BodyDiv>
                        <StyledH3>Hey, I'm</StyledH3>
                        <StyledH1>Arjun Bhalodia</StyledH1>
                        <StyledH2>
                            I am a&nbsp;
                                <Typed
                                    strings={["Backend Engineer", "Full Stack Developer"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                    style={{color: "#f09707"}}
                                />
                        </StyledH2>
                    </BodyDiv>
                </StyledDiv>
            </Parallax>
        </div>
    )
}

export default TopPart;
