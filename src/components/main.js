import React from "react";

import LowerMenu from "./LowerMenu";
import Header from "./Header";
import ThreeCols from "./ThreeCols";
import FourSteps from "./FourSteps";
import Step from "./Step";
import AboutUs from "./AboutUs";
import WhoDoWeHelp from "./WhoDoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

import iconShirt from "../assets/Icon-1.svg";
import iconBag from "../assets/Icon-2.svg";
import iconGlass from "../assets/Icon-3.svg";
import iconArrows from "../assets/Icon-4.svg";

export default function main() {
  return (
    <div>
      <div className='lowerMenu'>
        <LowerMenu />
      </div>
      <div>
        <Header />
      </div>
      <div id='threeCols' className='threeColsContainer'>
        <ThreeCols
          number={10}
          title={"BAGS DONATED"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
          }
        />
        <ThreeCols
          number={5}
          title={"ORGANISATIONS HELPED"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
          }
        />
        <ThreeCols
          number={7}
          title={"LOCAL DONATIONS"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
          }
        />
      </div>
      <div id='fourSteps' className='fourSteps'>
        <FourSteps />
        <div className='steps'>
          <Step
            icon={iconShirt}
            header='Choose stuff'
            desc='Anything someone could use'
          />
          <Step
            icon={iconGlass}
            header='Pack it'
            desc='You can do it with trash bags'
          />
          <Step
            icon={iconBag}
            header='Pick the foundation'
            desc='You can browse our database below'
          />
          <Step
            icon={iconArrows}
            header='Order a courier'
            desc='He will visit You at date specified'
          />
        </div>
        <div id='giveaway'>GIVE AWAY!</div>
      </div>
      <div id='aboutUs' className='aboutUs'>
        <AboutUs />
      </div>
      <div id='whoDoWeHelp' className='whoDoWeHelp'>
        <WhoDoWeHelp />
      </div>{" "}
      <Contact id='contact' />
      <Footer />
    </div>
  );
}
