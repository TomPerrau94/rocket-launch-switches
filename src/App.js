import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Switches from "./components/Switches";

function App() {
  return (
    <div>
      <Header className="header" title="Ready to go ?" />
      <div className="container">
        <Switches className="switches-global" />
      </div>
      <Footer
        className="footer"
        technoLink="https://fr.reactjs.org/"
        technoName="React"
        companyLink="https://www.lereacteur.io"
        companyName="le Reacteur"
        authorLink="https://github.com/TomPerrau94"
        authorName="Tom Perrau"
      />
    </div>
  );
}

export default App;
