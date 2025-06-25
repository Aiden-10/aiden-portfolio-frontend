import React from 'react';

import Header from '../components/header'; 
import Footer from '../components/footer';

import '../App.css'



export default function Attributions() {

    return (
        <>
            <Header />                          
            <main className="container">        
                <h1>Attributions</h1>
                <p>I'm grateful to the creators who provide free assets for personal and commercial use.</p>
                <ul>
                    <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                </ul>     
            </main>
            <Footer />                         
           
        </>
    );
}
