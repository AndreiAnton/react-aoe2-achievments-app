import baseData from './data';

// group the items by date
const groupedItems = baseData.reduce((groups, item) => {
    const date = item.datePretty.split('@')[0];
    if(!groups[date]){
        groups[date] = [];
    }
    groups[date].push(item);
    return groups;
}, {});

// transform to array format
const groupedItemsArray = Object.keys(groupedItems).map((date) => {
    return {
        date,
        timestamp: Date.parse(date),
        items: groupedItems[date]
    };
});

// order by date
groupedItemsArray.sort(function (a, b) {
    return a.timestamp - b.timestamp;
});

// console.log(groupedItemsArray)
// export default data;
export default groupedItemsArray;