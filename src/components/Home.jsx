import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
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
          <h3>"INNOVATION HAPPENS HERE"</h3>
          <div style={{ paddingRight: "3rem" }}>
            <p>
              We excel at transforming ideas into reality, backed by 8 years of
              experience in IT solutions. Our team breathes life into
              imaginations, having successfully completed over 100 projects with
              100% client satisfaction. As a top startup expansion company, we
              lead the market. Our commitment to innovation, attention to
              detail, and passion for excellence set us apart. With a dynamic
              team of experts, we’re poised to shape the future of technology.
              Our journey doesn’t end here. We’re constantly pushing boundaries,
              exploring new horizons, and creating solutions that redefine
              what’s possible. Join us on this exciting adventure!  But wait,
              there’s more! Our passion for innovation drives us to collaborate
              with like-minded visionaries, turning ideas into groundbreaking
              reality. Whether it’s cutting-edge software, transformative apps,
              or game-changing systems, we’re at the forefront of technological
              evolution. And guess what? Our clients aren’t just clients;
              they’re partners in progress. We celebrate their successes as our
              own, and their challenges fuel our determination. Together, we’re
              shaping a future where possibilities know no bounds. So, buckle
              up! The ride is exhilarating, the destination unknown, and the
              impact immeasurable. Welcome to our world of limitless
              imagination!
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
          <img src="homepage.jpg" alt="" height={"300px"} width={"400px"} />
        </div>
      </div>
    </>
  );
};

export default Home;
