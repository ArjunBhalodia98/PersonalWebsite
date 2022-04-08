import React from "react";
import profile from '../Assests/ProfilePicture-2.png';
import styled from "styled-components";
import { useSpring, animated} from "react-spring";
import { Container, Row, Col} from "react-bootstrap";
import Typed from "react-typed";

function GlassCard() {
    const [props, set] = useSpring(() => ({ xys:[0, 0, 1], config: {mass: 45, tension: 200, friction: 200} }))

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const DivContainer = styled(animated.div)`
      display: inline-block;
      padding: 3em;
      background: #FFFF;
      border-radius: 10px;
      z-index: 1;
      position: relative;
      backdrop-filter: blur(10px);
      border: 2px solid transparent;
      background-clip: border-box;
      cursor: pointer;
    `;

    const StyledImg = styled.img`
      width: 200px;
      height: auto;
      //border: 2px solid #000;
      //border-radius: 50%;
    `;

    const StyledH1 = styled.h1`
      line-heright: 1.5;
      letter-spacing: 1.5;
      font-family: "Gilroy";
    `;

    const StyledH3 = styled.h3`
      line-heright: 1.5;
      letter-spacing: 1.15;
      font-family: "Gilroy";
      font-size: 20px;
    `;



    return (
        <DivContainer
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys: [0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <Container>
                <Row>
                    <Col>
                        <h1>Links Here</h1>
                    </Col>
                    <Col>
                        <StyledImg src={profile}/>
                        <StyledH1>Arjun Bhalodia</StyledH1>
                        <StyledH3>
                            <Typed
                                strings={["Backend Engineer", "Full Stack Engineeer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </StyledH3>
                    </Col>
                    <Col>
                        <h1>Second links here</h1>
                    </Col>
                </Row>
            </Container>
        </DivContainer>
    );
}

export default GlassCard;