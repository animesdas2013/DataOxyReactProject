import React from 'react';
import Navbar from './Navbar';

const Online = () => {
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
            paddingLeft: "10rem",
          }}
        >
        <h3>ONLINE EXAMS</h3>
        <div style={{ paddingRight: "3rem" }}>
          <p>
            Welcome to our Online Exams section! Whether you're preparing for competitive exams, certifications, or classroom assessments, we've got you covered.
          </p>
          <p>
            Explore a range of practice tests, mock exams, and timed assessments. Sharpen your skills, track your progress, and boost your confidence. Our platform provides a secure and convenient way to simulate real exam conditions.
          </p>
          <p>
            From multiple-choice questions to essay prompts, challenge yourself and gauge your knowledge. Remember, practice makes perfect! So dive in, give it your best shot, and ace those exams.
          </p>
        </div>
        
        </div>
        <div
          className="Image"
          style={{
            display: "inlineBlock",
            paddingRight: "7rem",
            paddingTop: "3rem",
            width: "100rem",
          }}
        >
          <img src="online.jpg" alt="" height={"300px"} width={"400px"} />
        </div>
      </div>
        </>
    );
}

export default Online;