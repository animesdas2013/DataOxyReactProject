import React from 'react';
import Navbar from './Navbar';

const Button = () => {
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
            paddingLeft: "10rem"
          }}
        >
          <h3>LOGIN HERE</h3>
          <div style={{ paddingRight: "3rem" }}>
            <p>
            Welcome to Our Platform

            At Login, we’re more than just a team of experts; we’re dream weavers, turning ideas into reality. With over 8 years of experience in IT solutions, we’ve successfully completed over 100 projects, leaving our clients 100% satisfied.
            
            As a top startup expansion company, we lead the market by combining innovation, attention to detail, and a passion for excellence. Our dynamic team is poised to shape the future of technology. But our journey doesn’t end here; we’re constantly pushing boundaries, exploring new horizons, and creating solutions that redefine what’s possible.
            
            Join us on this exhilarating adventure! Our passion for innovation drives us to collaborate with like-minded visionaries. Whether it’s cutting-edge software, transformative apps, or game-changing systems, we’re at the forefront of technological evolution.
            
            Our clients aren’t just clients; they’re partners in progress. We celebrate their successes as our own, and their challenges fuel our determination. Together, we’re shaping a future where possibilities know no bounds.
            
            So buckle up! The ride is exhilarating, the destination unknown, and the impact immeasurable. Welcome to our world of limitless imagination!
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
          <img src="login.jpg" alt="" height={"300px"} width={"400px"} />
        </div>
      </div>
        </>
    );
}

export default Button;