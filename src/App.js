import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Journey from "./components/journey/Journey";
import News from "./components/news/News";
import Features from "./components/features/Features";
import Explore from "./components/explore/Explore";
import Gemit from "./components/gemit/Gemit";
import Community from './components/community/Community';
import './App.css';

function App() {
  const [pageMode, setPageMode] = useState("dextboard");

  const maChanged = (pageMode) => {
    setPageMode(pageMode);
  }

  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Journey></Journey>
      <News></News>
      <Features></Features>
      <Explore></Explore>
      <Gemit></Gemit>
      <Community></Community>
      <Sidebar maChanged={maChanged}></Sidebar>
    </div>
  );
}

export default App;
