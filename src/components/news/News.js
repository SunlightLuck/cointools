import { FaChevronRight }  from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';
import { Box } from "@mui/material";

function News(){
    return (
        <div id={"latest_news"}>
            <Box display={"flex"}
            flexDirection={"row"}
            columnGap={"20px"}
            justifyContent={"flex-start"}
            width={"80%"}
            paddingBottom={"20px"}
            borderBottom={"1px solid #373F41"}>
            <div style={{
                display:"flex", 
                flexDirection:"row", 
                justifyContent:"center", 
                alignItems:"center",
                width:"42px", height:"42px", 
                borderRadius:"5px", 
                background:"#C4C4C4"}}>
                <FiImage color={"#373F41"} size={30}/>
            </div>
            The latest news from cointools
            </Box>

            <Box display={"flex"}
            flexDirection={"row"}
            columnGap={"20px"}
            justifyContent={"flex-start"}
            width={"80%"}
            paddingTop={"10px"}
            paddingBottom={"20px"}>
                <Box display={"flex"}
                    flexDirection={"column"}
                    alignContent={"space-around"}
                    flex={"1"}
                    rowGap={"10px"}
                    border={"0px solid grey"}
                    >
                    <Box display={"flex"} 
                    fontSize={"calc(8px + 0.8vmin)"}
                    justifyContent={"flex-start"}
                    textAlign={"left"}
                    >
                        BGA blockchain game report 2021
                    </Box>
                    <Box display={"flex"} fontSize={"calc(10px + 0.9vmin)"}>
                        Yesterday
                    </Box>
                </Box>

                <Box display={"flex"}
                    flexDirection={"column"}
                    alignContent={"space-around"}
                    flex={"1"}
                    rowGap={"10px"}
                    border={"0px solid grey"}
                    >
                    <Box display={"flex"} 
                    flexDirection={"row"}
                    fontSize={"calc(8px + 0.8vmin)"}
                    justifyContent={"flex-start"}
                    textAlign={"left"}>
                        Radar and contribute2Earn benefit business and Dapp communicate
                    </Box>
                    <Box display={"flex"} fontSize={"calc(10px + 0.9vmin)"}>
                        2 days ago
                    </Box>
                </Box>

                <Box display={"flex"}
                    flexDirection={"column"}
                    alignContent={"space-around"}
                    flex={"1"}
                    rowGap={"10px"}
                    border={"0px solid grey"}
                    >
                    <Box display={"flex"} 
                    fontSize={"calc(8px + 0.8vmin)"}
                    textAlign={"left"}>
                        2021 Dapp Industry report
                    </Box>
                    <Box display={"flex"} fontSize={"calc(10px + 0.9vmin)"}>
                        Last week
                    </Box>
                </Box>

                <Box display={"flex"}
                    flexDirection={"column"}
                    alignContent={"space-around"}
                    flex={"1"}
                    rowGap={"10px"}
                    border={"0px solid grey"}
                    >
                    <Box display={"flex"} 
                    fontSize={"calc(8px + 0.8vmin)"}
                    textAlign={"left"}>
                        Nike Aquired NFT Fashion company RTFKT Studios
                    </Box>
                    <Box display={"flex"} fontSize={"calc(10px + 0.9vmin)"}>
                        Last Week
                    </Box>
                </Box>

                <Box display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    flex={"1"}
                    border={"0px solid grey"}
                    >
                    <FaChevronRight size={30}/>              
                </Box>
        </Box>
      </div>
    )
}
export default News;