import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Search/>

    </div>
  );
}

export default App;