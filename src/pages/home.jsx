import React from 'react';

import Header from '../components/header'; 
import Hero from '../components/hero'; 
import About from '../components/about'
import Projects from '../components/projects';
import Footer from '../components/footer';
import Contact from '../components/contact';


// --- Main Home Page ---
export default function Home() {

    return (
        <>
            <Header />                          
            <main className="container">        
                <Hero />                        
                <About />                       
                <Projects />                    
                <Contact />                     
            </main>
            <Footer />                         
           
        </>
    );
}
