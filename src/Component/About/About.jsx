import React, { useState } from "react";
import styled from "styled-components";

function About() {
  const [activeSection, setActiveSection] = useState("hobby");

  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <img src="./Image/download.jpg" alt="" data-aos="fade-right" />
          <AboutPart data-aos="fade-left">
            <h1>About Me</h1>
            <p>
            As a Frontend Developer, I specialize in creating the visual and interactive elements of websites and web applications. I ensure a seamless and responsive user experience across various devices and browsers by building user interfaces. I collaborate with designers and backend developers to implement designs and integrate server-side logic. My focus is on performance optimization, accessibility, and maintaining clean, efficient code.
            </p>

            
              <ul className="section">
                <li onClick={() => setActiveSection("hobby")}>Hobby</li>
                <li onClick={() => setActiveSection("education")}>Education</li>
                <li onClick={() => setActiveSection("other")}>Other</li>
              </ul>

            {activeSection === "hobby" ? (
              <Hobby>
                <ul className="list">
                  <li className="list-items">Coding</li>
                  <li className="list-items">Cricket</li>
                  <li className="list-items">Playing Online Games</li>
                  <li className="list-items">Going GYM</li>
                </ul>
              </Hobby>
            ) : activeSection === "education" ? (
              <Education>
                <ul className="list">
                  <li className="list-items">10th and 12th From Ratnpur </li>
                  <li className="list-items">BCA From Dr. E Raghvendra Rao</li>
                  <li className="list-items"> </li>
                  <li className="list-items"> </li>
                </ul>
              </Education>
            ) : (
              <Other>
                <ul className="list">
                  <li className="list-items">  Age - 22 </li>
                  <li className="list-items"> Location - Bilaspur Chhattisgarh</li>
                  <li className="list-items"> </li>
                  <li className="list-items"> </li>
                </ul>
              </Other>
            )}
          </AboutPart>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

export default About;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  img {
    width: 50%;
    aspect-ratio: 1/1;
    border-radius: 20px;
  }

  /* for Hobby , education and other section  */

  .list {
    all: unset;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .list-items {
    color: white;
    font-weight: 300;
  }

  @media screen and (max-width: 900px) {
    .list {
      text-align: center;
    }
  }
`;
const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const AboutPart = styled.div`
  width: 50%;

  h1 {
    all: unset;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 4rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 200;
  }

  .section {
    all: unset;
    list-style: none;
    gap: 5rem;
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    color: var(--theme);
    font-weight: bolder;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 0.7em;
    }
    .section{
    justify-content: center;
      gap: 2rem;
    }
  }
`;

const BaseSection = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;
const Hobby = styled(BaseSection)``;
const Education = styled(BaseSection)``;
const Other = styled(BaseSection)``;

