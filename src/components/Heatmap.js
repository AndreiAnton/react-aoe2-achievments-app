import moment from "moment"
import Timeline from "./Timeline";

const getCustomValue = (yearDay) => {
    let value = 0

    // for 2020
    switch (yearDay) {
        case 37:
            value = 3
            break;
        case 38:
            value = 8
            break;
        case 41:
            value = 1
            break;
        case 42:
            value = 1
            break;
        case 53:
            value = 1
            break;
        case 55:
            value = 3
            break;
        case 60:
            value = 1
            break;
        case 61:
            value = 1
            break;
        case 63:
            value = 3
            break;
        case 67:
            value = 11
            break;
        case 69:
            value = 1
            break;
        case 71:
            value = 1
            break;
        case 72:
            value = 3
            break;
        case 73:
            value = 2
            break;
        case 74:
            value = 8
            break;
        case 80:
            value = 1
            break;
        case 81:
            value = 4
            break;
        case 87:
            value = 4
            break;
        case 106:
            value = 1
            break;
        case 107:
            value = 1
            break;
        case 109:
            value = 2
            break;
        case 110:
            value = 2
            break;
        case 111:
            value = 2
            break;
        case 119:
            value = 2
            break;
        case 120:
            value = 1
            break;
        case 124:
            value = 2
            break;
        case 128:
            value = 2
            break;
        case 131:
            value = 1
            break;
    
        default:
            break;
    }

    return value
}

const Heatmap = () => {
    // 1 year range, from present day
    // let startDate = moment().add(-365, 'days');
    // let dateRange = [startDate, moment()];

    // for 2020
    let startDate = moment().year(2020).dayOfYear(1);
    let dateRange = [startDate, moment().year(2020).dayOfYear(366)];

    let data = Array.from(new Array(365)).map((_, index) => {
        return {
            date: moment(startDate).add(index, 'day'),
            value: getCustomValue(index)
        }
    })

    // console.log('Data: ', data)

    return (
        <>
            <Timeline range={dateRange} data={data} colorFunc={({alpha}) => `rgba(3, 160, 3, ${alpha})`} />
        </>
    )
}

export default Heatmap
