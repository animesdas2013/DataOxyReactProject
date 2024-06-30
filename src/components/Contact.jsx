import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
    return (
        <>
            <Navbar/>
            <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceBetween",
          margin: "2rem 9rem 2rem 10rem",
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
        <h3>CONTACT US</h3>
        <div style={{ paddingRight: "3rem" }}>
          <p>
            Have questions, feedback, or need assistance? We're here to help! Reach out to our friendly team through the following channels:
          </p>
          <ul>
            <li>Email: <a href="mailto:info@example.com">info@example.com</a></li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Visit our office: 123 Main Street, City, Country</li>
          </ul>
          <p>
            Whether you're a customer, partner, or curious explorer, we look forward to hearing from you. Let's connect!
          </p>
        </div>
        
        </div>
        <div
          className="Image"
          style={{
            display: "inlineBlock",
            paddingRight: "1rem",
            paddingTop: "3rem",
            width: "100rem",
          }}
        >
          <img src="contact.jpg" alt="" height={"300px"} width={"400px"} />
        </div>
      </div>
        </>
    );
}

export default Contact;