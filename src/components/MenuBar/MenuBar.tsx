import { Box, ListItem, ListItemButton, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { NavLink } from "react-router-dom";

export function MenuBar(){
    return(
        <Box sx={{border:2, borderColor:'#c9ef8e',}}>
            <Box sx={{background:'#424242', height:'100%'}}>
                <Box sx={{color:'#ffffff',display:'flex', width:'100%', height:'5rem', boder:2, alignItems:'center', flexDirection:'column', justifyContent:'center'}}>
                    <AccountCircleIcon fontSize="large" sx={{marginTop:'2rem',}}/>
                    <Typography>Seja Bem Vindo !</Typography>
                    <Box sx={{marginTop:'1rem',height:'1px', width:'90%', border:1, borderColor:'#c9c9c9'}}></Box>
                </Box>

                <NavLink to={''} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{marginBottom:'0.35rem',marginTop:'1rem'}}>

                        <ListItem sx={{fontSize:'12px', color:'#ffffff' }}>
                            <HomeIcon fontSize="medium" sx={{marginRight:'1rem', marginLeft:'-1rem'}}/>Página Inicial
                        </ListItem>

                    </ListItemButton>
                </NavLink>

                <NavLink to={''} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{ color:'#ffffff'}}>

                        <ListItem sx={{fontSize:'12px',}}>
                            <SearchIcon fontSize="medium" sx={{marginRight:'1rem', marginLeft:'-1rem'}}/>Produtos Listados
                        </ListItem>

                    </ListItemButton>
                </NavLink>

                <NavLink to={''} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{ color:'#ffffff'}}>

                        <ListItem sx={{fontSize:'12px',}}>
                            <ContentPasteIcon fontSize="small" sx={{marginRight:'1rem', marginLeft:'-1rem'}}/>Produtos em Estoque
                        </ListItem>

                    </ListItemButton>
                </NavLink>

                <NavLink to={'/create-stock'} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{ color:'#ffffff'}}>

                        <ListItem sx={{fontSize:'12px',}}>
                            <AddCircleOutlineIcon fontSize="medium" sx={{marginRight:'1rem', marginLeft:'-1rem'}}/>Criar Estoque
                        </ListItem>

                    </ListItemButton>
                </NavLink>

                <NavLink to={''} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{ color:'#ffffff'}}>

                        <ListItem sx={{fontSize:'12px',}}>
                            <ZoomInIcon fontSize="medium" sx={{marginRight:'1rem', marginLeft:'-1rem'}}/>Listar Produto
                        </ListItem>

                    </ListItemButton>
                </NavLink>
            </Box>
        </Box>
    );
}