import React, { useRef } from 'react';
import Header from '../component/Header';
import Home from '../component/Home';
import Features from '../component/Features';
import MakeMoney from '../component/MakeMoney';
import Aboutus from '../component/Aboutus';
import Service from '../component/Service';
import Footer from '../component/Footer';
import ScrollToTopButton from '../component/ScrollToTopButton ';

const Homepage = () => {
    const homeRef = useRef(null);
    const featuresRef = useRef(null);
    const makeMoneyRef = useRef(null);
    const aboutUsRef = useRef(null);
    const serviceRef = useRef(null);

    const smoothScrollTo = (elementY, duration) => {
        const startingY = window.pageYOffset;
        const diff = elementY - startingY;
        let start;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const time = timestamp - start;
            const percent = Math.min(time / duration, 1);

            window.scrollTo(0, startingY + diff * percent);

            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        });
    };

    const scrollToSection = (sectionName) => {
        let sectionRef;
        switch(sectionName) {
            case 'home':
                sectionRef = homeRef;
                break;
            case 'features':
                sectionRef = featuresRef;
                break;
            case 'makeMoney':
                sectionRef = makeMoneyRef;
                break;
            case 'aboutUs':
                sectionRef = aboutUsRef;
                break;
            case 'service':
                sectionRef = serviceRef;
                break;
            default:
                console.log('No such section');
                return;
        }
        
        if (sectionRef && sectionRef.current) {
            const sectionY = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
            smoothScrollTo(sectionY, 1500); 
        }
    };

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <div ref={homeRef}><Home /></div>
            <div ref={featuresRef}><Features /></div>
            <div ref={makeMoneyRef}><MakeMoney /></div>
            <div ref={aboutUsRef}><Aboutus /></div>
            <div ref={serviceRef}><Service /></div>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default Homepage;
