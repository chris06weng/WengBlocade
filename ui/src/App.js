import React from "react";
import "./App.css";
import Header from "./Header"; // make sure to import your Header component
import { WalletProvider } from "./components/WalletContext"; // Import the provider
import ExampleGameComponent from "./games/ExampleGameComponent"; // Import the game component
// import LeaderBoard from "./components/LeaderBoard"; // Uncomment this to view LeaderBoard

// Update the contract address here
const exampleContractAddress = "0x51C72848c68a965f66FA7a88855F9f7784502a7F";

function App() {
  return (
    <WalletProvider>
      {" "}
      {/* Wrap the entire application with WalletProvider */}
      <div className="App">
        <Header />
        <div className="content">
          <div className="side-panel" style={{ flex: "15%" }}></div>
          <div className="main-panel" style={{ flex: "70%" }}>
            {/* Main content goes here */}
            {/* <ExampleGameComponent contractAddress={exampleContractAddress} /> */}

            {/* Front end Leaderboard code below: UNCOMMENT LINE BELOW TO VIEW FRONT END LEADERBOARD*/}

            {/* <LeaderBoard></LeaderBoard> */}

            {/* LeaderBoard Front End made by Chris Weng, Ronan Valle, Aidan Michaelson*/}
          </div>
          <div className="side-panel" style={{ flex: "15%" }}></div>
        </div>
      </div>
    </WalletProvider>
  );
}

export default App;
