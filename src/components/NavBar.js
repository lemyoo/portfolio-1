import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const Div = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: "30px",
    paddingTop:"10px"
}));

function NavBar() {
    return (
        <Div>
            <div >
                <Link href="https://github.com/lemyoo/" color="inherit" underline="none" target="_blank" rel="noopener" >
                    <GitHubIcon />
                </Link>
            </div>
        </Div>
    )
}

export default NavBar