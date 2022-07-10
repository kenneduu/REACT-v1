import React from "react"; 
import About from "./About"
import Contact from "./Contact"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
import Testimonials from "./Testimonials"

export default function App() {
    return(
      <main className ="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About/>
        <Projects />
        <Skills /> 
        <Testimonials />
        <Contact />
      </main>
    );
}