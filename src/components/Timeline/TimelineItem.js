import React from 'react';
import ACHIEVMENTS from '../../Assets/images';

const TimelineItem = ({ itemData }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag">
                {itemData.img}
            </span>
            {/* <time>{data.datePretty}</time> */}
            {/* <p>{data.title}</p> */}
            <img src={ACHIEVMENTS[itemData.img]} alt="" />
            {/* <span className="circle"></span> */}
        </div>
    </div>
);

export default TimelineItem;