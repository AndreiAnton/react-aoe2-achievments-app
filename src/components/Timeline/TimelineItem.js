import React from 'react';
import ACHIEVMENTS from '../../Assets/images';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            {/* <span className="tag">
                {data.title}
            </span> */}
            <time>{data.datePretty}</time>
            <p>{data.title}</p>
            <img src={ACHIEVMENTS[data.img]} alt="" />
            <span className="circle"></span>
        </div>
    </div>
);

export default TimelineItem;