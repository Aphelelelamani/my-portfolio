import React, {useState} from 'react'
import './Styles.css'
import { Link } from 'react-router-dom'
import arrow from './Images/arrow.png'
import TPC from './Images/TPC.png'
import Ipad from './Images/Ipad.png'
import Nothing from './Images/Nothing.png'
import behance from './Images/behance.svg'
import github from './Images/github.svg'



function Portfolio() {
    return (
        <div>
            <section className="main-section portfolio">
                <aside className="AsideLeft">
                {/* <img src={crown} alt="" /> */}
                <div className="container">
                <h1>Welcome to my Profile</h1>
                </div>
                <p>Here you will find a mixed body of work, ranging from product design to web development, I am really passionate about creating amazing digital experiences , that will help capture visitors as well as drive sales or get your brand message across.</p>
                <Link  to="/Portfolio"><button  >WANNA CHAT ?</button></Link>
                </aside>

                 <aside className="AsideRight">
                 </aside>
            </section>
            <div className="arrow-container">
                    <img className="arrow" src={arrow} alt="" />
                </div>
            <section className="Sub_Section">
                <div className="Project One">
                <aside className="AsideLeft">
                  <Link className="NavLink" to='https://www.thepersonnelcorp.org.za/' target="_blank">
                    <img src={TPC} alt="" />
                        <div className="ProjectSummary">
                            <p>Project Name: First Portfolio</p>
                            <p>Project Type: Website</p>
                            <p>Project Completion Date:undefined</p>
                        </div>
                  </Link>
                </aside>
                <aside className="AsideRight">
                   <h1>Project summary</h1>
                   <p>Under here you'll find a collection of design solutions I've come up with, together with their case studies as well as prototypes, this work was done in pursuit of the google UX/UI design certificate</p>
                   <Link className="NavLink" to="https://github.com/Aphelelelamani/thepersonnelcorp-v2" target="_blank"><button><img className="icon" src={github} alt=""></img>view code</button></Link>
                </aside>
                </div>

             <div className="Project Two ">
             <aside className="AsideLeft">
                  <Link className="NavLink" to='https://aphelelelamani.github.io/myCv/' target="_blank">
                    <img src={Ipad} alt="" />
                        <div className="ProjectSummary">
                            <p>Project Name: UX/UI Work</p>
                            <p>Project Type: Product design</p>
                            <p>Project Completion Date: Undefined</p>
                        </div>
                  </Link>
                </aside>
                <aside className="AsideRight">
                   <h1>Project summary</h1>
                   <p>Under here you'll find a website I created as a portfolio during the early stages of learning how to code, the website is built mainly from Html and Css, with a touch of javascript, this was completed whilst I was part of the Hyperion dev bootcamp.</p>
                   <Link className="NavLink" to="https://github.com/Aphelelelamani/myCv" target="_blank"><button><img className="icon" src={github} alt=""></img>view code</button></Link>
                </aside>
             </div>
             <div className="Project Three">
             <aside className="AsideLeft">
                  <Link className="NavLink"to='https://www.behance.net/aphelelelamani1' target="_blank">
                    <img src={Nothing} alt="" />
                        <div className="ProjectSummary">
                            <p>Project Name: UX/UI Work</p>
                            <p>Project Type: Product design</p>
                            <p>Project Completion Date: Undefined</p>
                        </div>
                  </Link>
                </aside>
                <aside className="AsideRight">
                   <h1>Project summary</h1>
                   <p>Under here you'll find a collection of design solutions I've come up with, together with their case studies as well as prototypes, this work was done in pursuit of the google UX/UI design certificate</p>
                  <Link className="NavLink" to="https://www.behance.net/aphelelelamani1" target="_blank"><button><img className="icon" src={behance} alt=""></img>view code</button></Link>
                </aside>
             </div>
            </section>
        </div>
    )
}

export default Portfolio
