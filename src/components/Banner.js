import React from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Banner(props) {
	const navigate = useNavigate();
	return (
		<Box>
			<AppBar position='static'>
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }} onClick={() => navigate("/")}>
						<HomeIcon/>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{props.title}
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
