import { Container, Grid } from '@material-ui/core'
import React from 'react'
import "./profileCard.css";

export default function ProfileCard(props) {
    return (
        <div className="profileCardOuter">
            <div>
                <div className="profileCardPhoto">
                    <img src="https://via.placeholder.com/100" alt="Name" href="#"/>
                </div>
                <div className="profileCardText">
                    <div className="profileCardHeading">
                        <a href="{props.ownerDetails.url}"><p>{props.ownerDetails.name}</p></a>
                    </div>
                    <div className="profileCardDescription">
                        <p>{props.ownerDetails.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
