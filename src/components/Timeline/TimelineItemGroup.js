import React from 'react';
import TimelineItem from './TimelineItem';

const TimelineItemGroup = ({ timelineDataGroup }) => (
    <>
    {timelineDataGroup.map((yearGroupData, idx) => (
        <div className="timeline-item-group" key={idx}>
            <div className="timeline-item-group-content">
                <p>{yearGroupData.date}</p>
                {yearGroupData.items.map((data, idx) => (
                    <TimelineItem itemData={data} key={idx} />
                ))}
                <span className="circle"></span>
            </div>
        </div>
    ))}
    </>
);

export default TimelineItemGroup;