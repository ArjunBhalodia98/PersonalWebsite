import React from 'react';
import TopPart from "./Components/TopPart";
import MyJourney from "./Components/MyJourney";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
        <TopPart/>
        <MyJourney/>
        <Work/>
        <Testimonials/>
        {/*<Footer/>*/}
    </div>
  );
}

export default App;
