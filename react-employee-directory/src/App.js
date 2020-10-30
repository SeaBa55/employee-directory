import React from "react";
import Main from "./components/Main/index";
import Wrapper from "./components/Wrapper/index";
// import Header from "./components/Header/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        {/* <Header /> */}
        <Main />
      </Wrapper>
    </div>
  );
}
export default App;