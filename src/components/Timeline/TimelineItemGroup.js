import React from 'react';
import TimelineItem from './TimelineItem';

const TimelineItemGroup = ({ timelineDataGroup }) => (
    <div className="timeline-item-group">
        <div className="timeline-item-group-content">
            <p>{timelineDataGroup.date}</p>

            {timelineDataGroup.items.map((data, idx) => (
                <TimelineItem itemData={data} key={idx} />
            ))}
            <span className="circle"></span>
        </div>
    </div>
);

export default TimelineItemGroup;