import "./Features.css";
import { Box } from "@mui/material";
import { FiImage } from 'react-icons/fi';

function Features(){
    return (
        <div id={"features"}>
            COINTOOLS FEATURES
            <Box 
            width={"80%"}
            display={"flex"}
            flexDirection={"row"}
            columnGap={"20px"}
            mt={"50px"}
            justifyContent={"space-evenly"}
            >
            <Box className="featureItemA">
                <FiImage size={80}/>
                Network/Chain Tracker
            </Box>
            <Box className="featureItemA">
                <FiImage size={80}/>
                Real Time price data
            </Box>
            <Box className="featureItemA">
                <FiImage size={80}/>
                Free to use
            </Box>
            <Box className="featureItemA">
                <FiImage size={80}/>
                Track your portfolio
            </Box>
            </Box>
            <Box 
            width={"80%"}
            display={"flex"}
            flexDirection={"row"}
            columnGap={"50px"}
            mt={"50px"}
            justifyContent={"space-evenly"}
            >
            <Box className="featureItemB">
                <FiImage size={130}/>
                ANY WALLET INSPECTOR
                <div className="comment">
                Lorem Ipsum Dolor Sit Amet
                </div>
            </Box>
            <Box className="featureItemB">
                <FiImage size={130}/>
                Live Wallet Date
                <div className="comment">
                Lorem Ipsum Dolor Sit Consecteture Adipiscing Elit, Sed Do
                </div>
            </Box>
            <Box className="featureItemB">
                <FiImage size={130}/>
                Assets Analytics
                <div className="comment">
                Lorem Ipsum Dolor Sit Consecteture Adipiscing Elit, Sed Do
                </div>
            </Box>
            </Box>
            <Box 
            width={"80%"}
            display={"flex"}
            flexDirection={"row"}
            columnGap={"50px"}
            mt={"50px"}
            justifyContent={"space-evenly"}
            >
            <Box className="featureItemB">
                <FiImage size={130}/>
                WALLETS TRACKER
                <div className="comment">
                Lorem Ipsum Dolor Sit Consecteture Adipiscing Elit, Sed Do
                </div>
            </Box>
            <Box className="featureItemB">
                <FiImage size={130}/>
                TOKENS TRACKERS
                <div className="comment">
                Lorem Ipsum Dolor Sit Consecteture Adipiscing Elit, Sed Do
                </div>
            </Box>
            <Box className="featureItemB">
                <FiImage size={130}/>
                BOTs
                <div className="comment">
                Lorem Ipsum Dolor Sit Consecteture Adipiscing Elit, Sed Do
                </div>
            </Box>
            </Box>
      </div>
    )
}
export default Features;