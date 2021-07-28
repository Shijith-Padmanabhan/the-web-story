import React from 'react';
import "./aboutus.css";

import ProfileCard from '../profileCard/ProfileCard';

import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';




export default function AboutUs() {
    
    const aboutUsData = require('../../Database/mockDB');
    return (
        <Container maxWidth="md">
        
            <div>
                <div className="heading">
                    <div className="specialHeading">
                        <h1 >About Us.</h1>
                    </div>
                </div>
                <Container maxWidth="md">
                    <div className="paragraphText">
                        <p>
                            Hello user. We are a group of programmers mainly associated with the web. During our exploits with our computers; we have garnered a whole set of information we would like to share with you all. With this we are hoping to achieve what we like to call a one-stop destination for all things related the Web. Please contribute accordingly, and let's nurture this community together!!
                        </p>
                    </div>
                </Container>
                <div className="cardView">
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" >
                        <Grid item lg={6}>
                            <ProfileCard ownerDetails = {aboutUsData[0]}/>
                        </Grid>
                        <Grid item lg={6}>
                            <ProfileCard ownerDetails = {aboutUsData[1]}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
        
        )
}
