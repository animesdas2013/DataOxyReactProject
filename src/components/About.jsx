import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <>
            <Navbar/>
            <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceBetween",
          margin: "7rem",
          marginTop: "2rem",

          padding: "15px",
          textAlign: "left",
        }}
      >
        <div
          className="Text"
          style={{
            display: "inlineBlock",
            paddingLeft: "9rem"
          }}
        >
        <h3>ABOUT US</h3>
        <div style={{ paddingRight: "3rem" }}>
          <p>
            At our core, we are innovators. With 8 years of experience in IT solutions, we've honed our craft of turning ideas into reality. Our team breathes life into imaginations, having successfully completed over 100 projects with 100% client satisfaction.
          </p>
          <p>
            As a top startup expansion company, we lead the market. Our commitment to innovation, attention to detail, and unwavering passion for excellence set us apart. But this is just the beginning. Our journey extends beyond boundaries, exploring new horizons and creating solutions that redefine what's possible.
          </p>
          <p>
            Join us on this exhilarating adventure! We collaborate with like-minded visionaries, turning ideas into groundbreaking reality. Whether it's cutting-edge software, transformative apps, or game-changing systems, we're at the forefront of technological evolution.
          </p>
          <p>
            Our clients aren't just clients; they're our partners in progress. Their successes fuel our determination, and together, we're shaping a future where possibilities know no bounds. So buckle up! The ride is thrilling, the destination unknown, and the impact immeasurable. Welcome to our world of limitless imagination!
          </p>
        </div>
        
        </div>
        <div
          className="Image"
          style={{
            display: "inlineBlock",
            paddingRight: "12rem",
            paddingTop: "3rem",
            width: "100rem",
          }}
        >
          <img style={{background: "#fff"}} src="about.png" alt="" height={"300px"} width={"400px"} />
        </div>
      </div>
        </>
    );
}

export default About;