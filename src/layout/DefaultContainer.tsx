import { Box } from "@mui/material";
import { IDefaultContainer } from "../interfaces";

export function DefaultContainer({children}:IDefaultContainer){
    return(
        <Box sx={{border:2, borderColor:'#f0e00e', width:'100%'}}>
            {children}
        </Box> 
    );
}