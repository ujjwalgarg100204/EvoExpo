import React from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import '../landingPage.css'
import EventCard from './EventCard';
import {motion} from 'framer-motion'
import AnimatedTextWord from './AnimatedTextWord'
import AnimatedTextCharacter from './AnimatedTextCharacter'
import event1 from '../images/event1.jpg'
import event2 from '../images/event2.jpg'
import event3 from '../images/event3.png'
import event4 from '../images/event4.webp'
import event5 from '../images/event5.jpg'
import event7 from '../images/event7.png'



const Home = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1
              }
            }
          ]
        };

    return (
        <div className="page" id="home">
            <div className='name'>
                <h1><span className="headingSpan"><AnimatedTextWord text="Launch your event"/></span>
                <div><AnimatedTextWord text="hassle free and" color="black"/><AnimatedTextWord text="drive it to success" color="black"/></div></h1>
                <p className="details">
                  <AnimatedTextCharacter text="EvoExpo helps individuals plan and run various"/>
                  <AnimatedTextCharacter text="events such as hackathons, webinars, conferences,"/>
                  <AnimatedTextCharacter text="job fairs, university events and specific events "/>
                  <AnimatedTextCharacter text="like art exihibition."/> 
                </p>
                <motion.div
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1,
                  transition: 0.5
                }}
                ><Link to='/login' className='cv-btn'>Login</Link>
                </motion.div>
            </div>
            <div className="eventSlider">
                <h2><span className="eventHeading">Check out some </span>Upcoming Events</h2>
                <Slider {...settings} style={{display: 'flex'}}>
                    <EventCard image={event1}/>
                    <EventCard image={event2}/>
                    <EventCard image={event3}/>
                    <EventCard image={event4}/>
                    <EventCard image={event5}/>
                    <EventCard image={event7}/>
                </Slider>
            </div>
        </div>
    )
}

export default Home