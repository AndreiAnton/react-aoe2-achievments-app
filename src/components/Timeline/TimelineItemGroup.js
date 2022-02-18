import React from 'react';
import TimelineItem from './TimelineItem';

const TimelineItemGroup = ({ timelineDataGroup }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <p>{timelineDataGroup.date}</p>
            
            {timelineDataGroup.items.map((data, idx) => (
                <TimelineItem itemData={data} key={idx} />
            ))}
            {/* <span className="tag">
                {data.title}
            </span> */}
            {/* <time>{item.datePretty}</time> */}
            {/* <img src={ACHIEVMENTS[item.img]} alt="" /> */}
            {/* <span className="circle"></span> */}
        </div>
    </div>
);

export default TimelineItemGroup;