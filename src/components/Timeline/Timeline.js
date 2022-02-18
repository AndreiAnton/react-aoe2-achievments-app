import React from 'react';
import timelineData from '../../processedData';
import TimelineItemGroup from './TimelineItemGroup';

const Timeline = () => timelineData.length > 0 && (
    <div className='timeline-container'>
        {timelineData.map((data, idx) => (
            <TimelineItemGroup timelineDataGroup={data} key={idx} />
        ))}
    </div>
);

export default Timeline;