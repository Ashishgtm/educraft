import React, { useEffect, useState, useRef } from 'react';
import './HomeB.css';
import { FaCircleNotch } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HomeB = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer to detect visibility
    useEffect(() => {
        const target = sectionRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% is visible
        );

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let counter1 = 0;
        let counter2 = 0;

        const intervalId1 = setInterval(() => {
            if (counter1 < 10) {
                counter1++;
                setCount(counter1);
            } else {
                clearInterval(intervalId1);
            }
        }, 150);

        const intervalId2 = setInterval(() => {
            if (counter2 < 12) {
                counter2++;
                setCount2(counter2);
            } else {
                clearInterval(intervalId2);
            }
        }, 150);

        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
        };
    }, [isVisible]);

    return (
        <div className="consulting-team-container">
            <div className="about-us">
                <div className='about'><FaCircleNotch className='iconabout' />about us </div>
                <div className='empabout'>Empowering our clients with solutions that matter</div>
                <div className='aboutpar'>
                    Educraft Abroad Studies Pvt. Ltd. is a pioneer registered institution established in Kathmandu, registered under the Act of Nepal Government.
                    At Educraft Abroad Studies, we understand that choosing the right courses and country for your study abroad experience is a pivotal decision.
                </div>
                <Link to='/about'>
                    <button className="custom-button2">
                        Read more ---
                    </button>
                </Link>
            </div>

            {/* The section with counters */}
            <div className="info-grid" ref={sectionRef}>
                <div className="info-item knowledge-marketing">
                    <h3 className='infoonly'>Innovative Problem Solving</h3>
                </div>
                <div className="info-item">
                    <div className="counter">
                        <span>{count.toLocaleString('en-US')}</span>k
                    </div>
                    <p>HAPPY CLIENTS</p>
                </div>
                <div className="info-item">
                    <div className="counter">
                        <span>{count2}</span>
                    </div>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="info-item knowledge-marketing2">
                    <h3 className='infoonly'>Expert Financial Analysis</h3>
                </div>
            </div>
        </div>
    );
}

export default HomeB;
