import React from "react";
import Header from "../components/section/Header";
import Footer from "../components/section/Footer";
import Main from "../components/section/Main";

import Intro from "../components/contents/Intro";
import Skip from "../components/contents/Skip";
import Site from "../components/contents/Site";
import Skill from "../components/contents/Skill";
import Portfolio from "../components/contents/Portfolio";
import Contact from "../components/contents/Contact";

const HomeView = () => {
  return (
    <>
    <Skip />
    <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;