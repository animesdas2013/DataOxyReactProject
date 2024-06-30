import React from 'react';
import Navbar from './Navbar';

const Study = () => {
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
        <h3>STUDY MATERIALS</h3>
        <div style={{ paddingRight: "3rem" }}>
          <p>
            Welcome to our comprehensive study materials section! Here, you'll find a wealth of resources to enhance your learning journey. Whether you're a student, professional, or lifelong learner, we've curated materials to help you excel.
          </p>
          <p>
            Dive into textbooks, articles, video lectures, and practice exercises. Explore topics ranging from mathematics and science to literature and history. Our goal is to empower you with knowledge and ignite your curiosity.
          </p>
          <p>
            Feel free to browse, download, and engage with these materials. Learning never stops, and we're thrilled to be part of your educational adventure!
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
          <img src="study.jpg" alt="" height={"300px"} width={"400px"} />
        </div>
      </div>
        </>
    );
}

export default Study;