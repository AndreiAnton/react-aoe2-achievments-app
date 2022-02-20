import React from 'react';
import {
    groupedByYearItemsArray
} from '../../processedData';
import TimelineItemGroup from './TimelineItemGroup';

const Timeline = () => groupedByYearItemsArray.length > 0 && (
    <div className='timeline-container'>
        {groupedByYearItemsArray.map((yearGroupData, idx) => (
            <div className='timeline-year-container' key={idx}>
                <span className='timeline-year-title'>
                    {yearGroupData.year}
                </span>
                <div className='timeline-year-items-container'>
                    <TimelineItemGroup timelineDataGroup={yearGroupData.items} />
                </div>
            </div>
        ))}
    </div>
);

export default Timeline;