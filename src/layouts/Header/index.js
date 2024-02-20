// Header.js
import React from "react";
import logo from "../../assets/images/Logo Inito.png"; 
import "./header.css";

const Header = () => {
  return (
    <header style={{ background: "white", padding: "20px", height: "116px"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </a>

        <nav>
          <ul
            className="grid-container"
            style={{
              listStyle: "none",
              display: "flex",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ marginRight: "10px" }}>
              <a href="/about">About</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="/stories">Stories</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="/blog">Blog</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="/faq">FAQ</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="/contacts">Contacts</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="#">
                <button
                  style={{
                    padding: "10px",
                    width: "202px",
                    height: "51px",
                    backgroundColor: "#1F94AA",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                  }}
                >
                  Get the Initio Kit
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
