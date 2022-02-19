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

const groupedByYearItems = groupedItemsArray.reduce((groups, item) => {
    const year = item.date.split(',')[1] ? item.date.split(',')[1]?.trim() : 'incomplete';
    if (!groups[year]){
        groups[year] = [];
    }
    groups[year].push(item);
    return groups;
}, {});

const groupedByYearItemsArray = Object.keys(groupedByYearItems).map((year) => {
    const timestamp = year !== 'incomplete' ? Date.parse(year) : 2000000000000
    return {
        year,
        timestamp: timestamp,
        items: groupedByYearItems[year]
    };
});

// console.log(groupedByYearItemsArray)
// console.log(groupedItemsArray)

export {
    groupedByYearItemsArray
};