import React from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Menu, MenuItem, Tooltip} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {stateListQuery} from "../api/state";
import {useRecoilValue} from "recoil";

export default function Banner(props) {
    const navigate = useNavigate();
    const stateList = useRecoilValue(stateListQuery);

    const [anchorElState, setAnchorElState] = React.useState(null);

    const handleClickHomeButton = (event) => {
        navigate("/");
    }
    const handleOpenStateMenu = (event) => {
        setAnchorElState(event.currentTarget);
    };
    const handleSelectStateMenu = (event) => {
        setAnchorElState(null);
        const state = event.target.innerText;
        if (state == null || state === '') {
            return;
        }
        navigate("/" + state);
        window.location.reload();
    };

    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{mr: 2}}
                                onClick={handleClickHomeButton}>
                        <HomeIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {props.title}
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', padding: '0px 0px 8px 0px'}}>
                        <Tooltip title="Select a state">
                            <IconButton onClick={handleOpenStateMenu} sx={{p: 0}}>
                                <ArrowDropDownIcon></ArrowDropDownIcon>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElState}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElState)}
                            onClose={handleSelectStateMenu}
                        >
                            {stateList.map((state) => (
                                <MenuItem key={state} value={state} onClick={handleSelectStateMenu}>
                                    <Typography textAlign="center">{state}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
