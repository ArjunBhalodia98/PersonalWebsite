import Background_Image from './Assests/Background_Image.jpg';
import styled from "styled-components";
import "./App.css";
import Typed from 'react-typed';

function App() {

    const StyledDiv = styled.div`
      background-image: url(${Background_Image});
      background-size: cover;
      background-repeat: no-repeat;
      //opacity: 0.5;
      position: relative;
      height: 100vh;
      @media only screen and (max-width: 820px){
        background-position: center;
      }
    `;

    const BodyDiv = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;

    const StyledH1 = styled.h1`
      line-heright: 1.5;
      letter-spacing: 1.5;
      font-family: "Nunito";
    `;

    const StyledH3 = styled.h3`
      line-heright: 1.5;
      letter-spacing: 1.15;
      font-family: "Lato";
      font-size: 20px;
    `;

  return (
    <div className="App">
        <StyledDiv/>
        <BodyDiv>
            <StyledH3>Hey, I'm</StyledH3>
            <StyledH1>Arjun Bhalodia</StyledH1>
            <Typed
                strings={["Backend Engineer", "Full Stack Engineeer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </BodyDiv>
    </div>
  );
}

export default App;
