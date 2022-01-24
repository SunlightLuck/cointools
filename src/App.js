import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";
import { FaImage }  from 'react-icons/fa';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pageMode, setPageMode] = useState("dextboard");

  const maChanged = (pageMode) => {
    alert('app.js  ' + pageMode);
    setPageMode(pageMode);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Box display={"flex"} ml={"45px"}>
            LOGO
        </Box>
        <Box display={"flex"}>
          <div id={"launch_app_button"}>
            launch app
          </div>
        </Box>
      </header>
      <div id={"intro"}>
        <Box 
          display={"flex"}  
          flex={"1"} 
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"0px solid grey"}>
            <Box 
              display={"flex"}
              border={"0px solid grey"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignContent={"space-between"}
              width={"60%"}
              >
                <Box display={"flex"} 
                  justifyContent={"flex-start"}>
                    The #1 Tool
                </Box>
                <Box display={"flex"} 
                  justifyContent={"flex-start"}>
                    for your trades
                </Box>
                <Box display={"flex"} 
                  justifyContent={"flex-start"} 
                  fontSize={"30px"} 
                  mt={"60px"}>
                    TRADE SMART NOT HARD
                </Box>
                <Box display={"flex"} 
                  justifyContent={"flex-start"}
                  fontSize={"25px"}
                  mt={"30px"}>
                    Discover, Track & Trade Everyting
                </Box>
                <Box display={"flex"}  
                  justifyContent={"space-between"}
                  alignItems={"stretch"}
                  flexDirection={"row"}
                  columnGap={"10px"}
                  mt={"30px"}
                  flexGrow={"1"}>
                    <Box display={"flex"} flexGrow={"1"} id={"market_trends"}>
                      Market Trends
                    </Box>
                    <Box display={"flex"} flexGrow={"1.3"} id={"go_to_portfolio"}>
                      Goto portfolio app
                    </Box>
                </Box>

                <Box display={"flex"}  
                  justifyContent={"space-between"}
                  alignItems={"stretch"}
                  flexDirection={"row"}
                  mt={"30px"}
                  flexGrow={"2.3"}
                  >
                    <Box display={"flex"} flexGrow={"2.3"} id={"lorem_ipsum"}>
                      Lorem Ipsum Dolor S
                      <div style={{
                        position:"absolute", 
                        height:"100%", 
                        right:"-5px", 
                        bottom:"0px", 
                        width:"10px",
                        borderTopLeftRadius:"5px", 
                        borderBottomLeftRadius:"5px", 
                        background:"#737B7D"}}>
                      </div>
                    </Box>
                    <Box display={"flex"} 
                      flexGrow={"1"} fontSize={"15px"} 
                      justifyContent={"center"}
                      alignItems={"center"}
                      >
                      CHEK WALLET
                    </Box>
                </Box>
                <Box display={"flex"} 
                  justifyContent={"flex-start"}
                  fontSize={"25px"}
                  mt={"20px"}
                  >
                  Trending
                </Box>
                <Box display={"flex"}
                  flexDirection={"row"}
                  columnGap={"10px"}
                  mt={"10px"}
                  justifyContent={"flex-start"}>
                  <Box className="trendingButton">
                      Games
                  </Box>
                  <Box className="trendingButton">
                      NFTs
                  </Box>
                  <Box className="trendingButton">
                      Defi
                  </Box>
                  <Box className="trendingButton">
                      BSC
                  </Box>
                  <Box className="trendingButton">
                      Ethereum
                  </Box>
                </Box>
                <Box display={"flex"}
                  flexDirection={"row"}
                  columnGap={"10px"}
                  mt={"10px"}
                  justifyContent={"flex-start"}>
                  <Box className="trendingButton">
                      Polygon`s
                  </Box>
                  <Box className="trendingButton">
                      Snoop Dogg NFTs
                  </Box>
                </Box>
            </Box>
        </Box>
        <Box 
          display={"flex"}  
          flexDirection={"column"}
          flex={"1"}
          mr={"10px"}
          rowGap={"10px"} 
          alignContent={"stretch"}
          border={"0px solid grey"}
          height={"100%"}>
          <Box className="introSqureRow">
            <Box display={"flex"} flex={"1"}></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
          </Box>
          <Box className="introSqureRow">
            <Box display={"flex"} flex={"1"}></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
          </Box>
          <Box className="introSqureRow">
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box display={"flex"} flex={"1"}></Box>
            <Box display={"flex"} flex={"1"}></Box>
          </Box>
          <Box className="introSqureRow">
            <Box display={"flex"} flex={"1"}></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box display={"flex"} flex={"1"}></Box>
          </Box>
          <Box className="introSqureRow">
            <Box display={"flex"} flex={"1"}></Box>
            <Box display={"flex"} flex={"1"}></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
          </Box>
          <Box className="introSqureRow">
            <Box display={"flex"} flex={"1"}></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
          </Box>
          <Box className="introSqureRow">
            <Box display={"flex"} flex={"1"}></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box className="introSquare"></Box>
            <Box display={"flex"} flex={"1"}></Box>
          </Box>
        </Box>
      </div>
      <div id="crypto_journey">
        <Box display={"flex"} 
          flexDirection={"row"}
          border={"0px solid gray"}
          >
          A single place for all your crypto journey
        </Box>
        <Box display={"flex"}
          width={"50%"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          mt={"80px"}
          columnGap={"30px"}
          border={"0px solid gray"}
        >
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              Tokens
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Tracks, discover and
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              analyze the latest dapps
            </Box>
          </Box>
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              DEXs
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Tracks, discover and
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              analyze the latest dapps
            </Box>
          </Box>
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              NFTs
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Tracks, discover and
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              analyze the latest dapps
            </Box>
          </Box>
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              Wallets
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Tracks, discover and
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              analyze the latest dapps
            </Box>
          </Box>
        </Box>
        <Box display={"flex"}
          width={"50%"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          mt={"20px"}
          columnGap={"30px"}
          border={"0px solid gray"}
        >
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              Indistry Pulse
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              A complet Dapp industry
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Overview
            </Box>
          </Box>
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              ICO IDO IEO
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Sign up for free for Air
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Radar Airdrops
            </Box>
          </Box>
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              Portfolio
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Track, analyze and
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              manage your wallets
            </Box>
          </Box>
          <Box className="crypto_journey_item" >
            <Box display={"flex"}>
              <FaImage color={"#373F41"}/>
            </Box>
            <Box display={"flex"}
              mt={"15px"} mb={"20px"}
              fontSize={"calc(10px + 1.5vmin)"}
              fontWeight={"bold"}>
              News/Research
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              Exchange your tokens on
            </Box>
            <Box display={"flex"}
              fontSize={"calc(5px + 1vmin)"}>
              multiple networks
            </Box>
          </Box>
        </Box>
      </div>
      <Sidebar maChanged={maChanged}></Sidebar>
    </div>
  );
}

export default App;
