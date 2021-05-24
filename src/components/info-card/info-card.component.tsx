import React from 'react';
import './info-card.styles.scss';
import {Words} from "../../Words";

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
            <div className="info-title"></div>
            <div className="box-text">{Words.infoText}</div>
        </div>
    )
}
