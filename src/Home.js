import React from 'react'
import './Styles.css'
import { Link } from 'react-router-dom'
// import crown from './Images/crown.png'



function Home() {

    return (
        <div>
            <section className="main-section Home">
                <aside className="AsideLeft">
                <div className="container">
                  <h1>I AM APHELELE LAMANI</h1>
                </div>
                   <p>I am a web developer that specializes in react.js , node.js ,Redux as well as Javascript
                   while you browse this website, you will have the opportunity to view a lot of my work, if you'd like to partner with me, feel free to reach out.
                   </p>
                    <Link to="/Portfolio"><button  >CHECK ME OUT</button></Link>
                </aside>
                 <aside className="AsideRight">
                 </aside>
            </section>
        </div>
    )
}

export default Home
