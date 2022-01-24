import { Box } from "@mui/material";
function Header(){
    return (
      <header className="App-header">
        <Box display={"flex"} ml={"45px"} style={{cursor:"pointer"}}>
            LOGO
        </Box>
        <Box display={"flex"}>
          <div id={"launch_app_button"}>
            launch app
          </div>
        </Box>
      </header>
    );
}
export default Header;