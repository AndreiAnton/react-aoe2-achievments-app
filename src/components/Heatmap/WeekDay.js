import moment from "moment"

const getNextDay = (day) => {
    switch (day) {
        case 'Sun':
            return 'Mon'
        case 'Mon':
            return 'Tue'
        case 'Tue':
            return 'Wed'
        case 'Wed':
            return 'Thu'
        case 'Thu':
            return 'Fri'
        case 'Fri':
            return 'Sat'
        case 'Sat':
            return 'Sun'
    
        default:
            return day
    }
}

const WeekDay = ({ index, startDate }) => {
    const dateString = moment(startDate).toDate().toDateString();

    const firstDay = dateString.split(' ')?.[0];
    const secondDay = getNextDay(firstDay);
    const thirdDay = getNextDay(secondDay);
    const fourthDay = getNextDay(thirdDay);
    const fifthDay = getNextDay(fourthDay);
    const sixthDay = getNextDay(fifthDay);
    const seventhDay = getNextDay(sixthDay);

    const DayNames = {
        0: firstDay,
        1: secondDay,
        2: thirdDay,
        3: fourthDay,
        4: fifthDay,
        5: sixthDay,
        6: seventhDay
    }

    return (
        <div className='timeline-weekdays-weekday'>
            {DayNames[index]}
        </div>
    )
}

export default WeekDay
