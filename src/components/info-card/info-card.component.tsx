import React from 'react';
import './info-card.styles.scss';

interface Props {
    infoIcon: any,
    style?: any
}

export default function InfoCard(props: Props) {
    return (
        <div className={`${props.style} container`}>
            <div className="center-img">
                <img src={props.infoIcon} alt="info-icon1" className="info-img"/>
            </div>
            <div className="info-title">XXX</div>
            <div className="box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
        </div>
    )
}