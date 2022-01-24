import React, { useState } from "react";
import { FaImage }  from 'react-icons/fa';
import { Box } from '@mui/material';
import "./Sidebar.css";

export default function Sidebar({ maChanged }) { //
  const [isHover, setHover] = useState(false);
  
  const onClickItem = (itm) => {
    maChanged(itm);
  };

  return (
    <Box 
      className={"sidebar"}
      onMouseOver={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}>
      {isHover &&
      <Box>
        <Box 
          className={"sidebar-option"} 
          mt={"30px"}
          onClick={()=>onClickItem('walletinspector')}>
            <FaImage  
              color={"#ffffff"} 
              size={55} />
            wallet inspector
        </Box>
        <Box 
          className={"sidebar-option"} 
          mt={"30px"}
          onClick={()=>onClickItem('settings')}>
            <FaImage  
              color={"#ffffff"} 
              size={55} />
            settings
        </Box>
       <Box 
          className={"sidebar-option"} 
          mt={"30px"}
          onClick={()=>onClickItem('faq')}>
            <FaImage  
              color={"#ffffff"} 
              size={55} />
            faq
        </Box>
        <Box 
          className={"sidebar-option"} 
          mt={"30px"}
          onClick={()=>onClickItem('advertise')}>
            <FaImage  
              color={"#ffffff"} 
              size={55} />
            advertise
        </Box>
        <Box 
          className={"sidebar-option"} 
          mt={"30px"}
          onClick={()=>onClickItem('partners')}>
            <FaImage  
              color={"#ffffff"} 
              size={55} />
            partners
        </Box>
      </Box>
    }
    </Box>
  );
}