import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { MenuBar } from "../components/MenuBar/MenuBar";

export function DefaultLayout(){
    return (
        <>
            <Header/>
            <Box sx={{border:2, width:'100vw', height:'89.3vh', display:'flex'}}>
                <MenuBar/>
                <Outlet/>
            </Box>
        </>
    );
}