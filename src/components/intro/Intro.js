
import { Box } from "@mui/material";
function Intro(){
    return (
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
    );
}
export default Intro;