import timelineData from '../../data';

let ACHIEVMENTS = {};
timelineData.map(item => {
    ACHIEVMENTS[item.img] = require(`./${item.img}.png`).default
})
export default ACHIEVMENTS;