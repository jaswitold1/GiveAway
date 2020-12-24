import React from 'react'
import LoggedUpperMenu from './LoggedUpperMenu'
import LowerMenu from './LowerMenu'
import Header from "./Header";
import ThreeCols from "./ThreeCols";
import FourSteps from "./FourSteps";
import Step from "./Step";
import AboutUs from "./AboutUs";
import WhoDoWeHelp from "./WhoDoWeHelp";
import Contact from './Contact'
import Footer from './Footer'

import iconShirt from "../assets/Icon-1.svg";
import iconBag from "../assets/Icon-2.svg";
import iconGlass from "../assets/Icon-3.svg";
import iconArrows from "../assets/Icon-4.svg";

export default function main() {
    return (
        <div>
        
        
        <div className="lowerMenu">
          <LowerMenu />
        </div>
               <div>
              <Header />
            </div>
            <div id="threeCols" className="threeColsContainer">
              <ThreeCols
                number={10}
                title={"ODDANYCH WORKÓW"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
                }
              />
              <ThreeCols
                number={5}
                title={"WSPARTYCH ORGANIZACJI"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
                }
              />
              <ThreeCols
                number={7}
                title={"ZORGANIZOWANYCH ZBIÓREK"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
                }
              />
            </div>
            <div id="fourSteps" className="fourSteps">
              <FourSteps />
              <div className="steps">
                <Step
                  icon={iconShirt}
                  header="Wybierz rzeczy"
                  desc="skorzystaj z worków na śmieci"
                />
                <Step
                  icon={iconGlass}
                  header="Spakuj je"
                  desc="wybierz zaufane miejsce"
                />
                <Step
                  icon={iconBag}
                  header="Zdecyduj komu chcesz pomóc"
                  desc="kurier przyjedzie w dogodnym terminie"
                />
                <Step
                  icon={iconArrows}
                  header="Zamów kuriera"
                  desc="kurier przyjedzie w dogodnym terminie"
                />
              </div>
              <div id="giveaway">ODDAJ RZECZY</div>
            </div>
            <div id="aboutUs" className="aboutUs">
              <AboutUs />
            </div>
            <div id="whoDoWeHelp" className="whoDoWeHelp">
              <WhoDoWeHelp />
              <Contact id="contact" />
        <Footer />
            </div>{" "}
        </div>
    )
}
