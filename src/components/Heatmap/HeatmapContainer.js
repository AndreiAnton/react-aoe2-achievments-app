import React from 'react';
import {
    groupedByYearItemsArray
} from '../../processedData';
import Heatmap from './Heatmap';

const HeatmapContainer = () => groupedByYearItemsArray.length > 0 && (
    <div className='heatmap-container'>
        {groupedByYearItemsArray.map((yearGroupData, idx) => (
            yearGroupData.year !== "incomplete" &&
            (
            <Heatmap year={yearGroupData.year} yearData={yearGroupData.items} key={idx}/>
            )
        ))}
    </div>
);

export default HeatmapContainer;