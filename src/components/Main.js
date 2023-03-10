import React from 'react';
import NavBar from './NavBar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Div = styled("div")(({ theme }) => ({
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: "100vh"
}));
function Main() {
    return (
        <Div>
            <NavBar />
            <Typography variant='h4' marginTop={10}>
                Emmanuel Mohammed Lartey
            </Typography>
            <Typography variant='h5' marginTop={10}>
                (My Portfolio)
            </Typography>
        </Div>
    )
}

export default Main