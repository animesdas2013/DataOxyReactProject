import React from "react";

const Footer = () => {
  return (
    <div className="foot" style={{
      height: "80px", /* Adjusted height to accommodate text */
      backgroundColor: "rgb(10, 23, 59)",
      position: "fixed",
      textAlign: "center",
      bottom: "0",
      width: "100%",
    }}>
      <footer className="footer" style={{ height: "100%" }}>
        <ul style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0 20rem",
          listStyle: "none",
          margin: "0",
          height: "100%",
        }}>
          <li style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="companysmalllogo.png" alt="Company Logo" style={{ width: "auto", height: "60px" }} />
            <p style={{ margin: "-5px 0 0", color: "white" }}>Company</p>
          </li>
          <li style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1px" }}>
            <img src="roundlogo.png" alt="Round Logo" style={{ width: "auto", height: "70px" }} />
            <p style={{ margin: "-16px 0 0", color: "white" }}>Dataoxy Technologies</p>
          </li>
          <li style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="grouplogo.png" alt="Group Logo" style={{ width: "auto", height: "60px" }} />
            <p style={{ margin: "-5px 0 0", color: "white" }}>Our Group</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
