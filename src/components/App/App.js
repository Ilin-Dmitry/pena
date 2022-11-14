import "./App.css";
import React from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  function blurOut() {
    let count = 0;
    setInterval(() => {
      const heading = document.querySelector(".main__heading");
      const page = document.querySelector(".page");
      if (count < 100) {
        count++;
        heading.style.opacity = count * 0.01;
        page.style.filter = `blur(${30 / (count / 10) - 3}px)`;
        page.style.transform = `scale(${1.3 - (count * 3) / 1000})`;
      }
    }, 30);
  }
  useEffect(() => {
    blurOut();
  }, []);
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
