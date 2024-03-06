
import { Typography } from '@mui/material';
import ScrollToTop from "react-scroll-to-top";
import { NavLink } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

const Footer = () => {
    return (
        <>

            <Typography
                className='socialFooter'
                variant='div'
                component={'div'}
            >
                <Typography
                    className='sociaIconlFooter'
                    variant='div'
                    component={'div'}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography
                        className='iconP'
                        variant='p'
                        sx={
                            {
                                mb: 4,
                                border: '0.2rem',
                                fontSize: '2rem'
                            }}
                    >
                        Follow me on
                    </Typography>

                    <NavLink className='socialIcon'><LinkedInIcon /></NavLink>
                    <NavLink className='socialIcon'><GitHubIcon /></NavLink>
                    <NavLink className='socialIcon'><TwitterIcon /></NavLink>
                </Typography>
            </Typography>


            <Typography
                variant='div'
                component={'div'}
            >
                <Typography
                    variant='h6'
                    component={'h6'}
                    sx={{
                        textAlign: 'center',
                        backgroundColor: '#360161',
                        color: 'white',
                        pt: 4,
                        pb: 2,
                        fontSize: '2rem'
                    }}
                >
                    &copy; 2024 Abhishek | All Rights Reserved
                </Typography>
                <ScrollToTop
                    smooth
                    color='white'
                    style={{ 
                        backgroundColor: '#000',
                        fontWeight: 'bold',
                        borderRadius: '8rem'
                    }}
                />

            </Typography>
        </>
    )
}

export default Footer
