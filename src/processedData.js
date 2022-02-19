import baseData from './data';

function orderAscending(a, b) {
    return a.timestamp - b.timestamp;
};

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
    const timestamp = date !== 'aaaaaaaa' ? Date.parse(date) : 2000000000000
    return {
        date,
        timestamp: timestamp,
        items: groupedItems[date]
    };
});

// order by date
groupedItemsArray.sort(orderAscending);

// order grouped elements by date
groupedItemsArray.forEach(group => {
    group.items.sort(orderAscending);
});

// console.log(groupedItemsArray)
export default groupedItemsArray;