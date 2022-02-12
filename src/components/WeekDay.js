
const WeekDay = ({ index }) => {
    const DayNames = {
        0: 'Sun',
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat'
    }

    return (
        <div className='timeline-weekdays-weekday'>
            {DayNames[index]}
        </div>
    )
}

export default WeekDay
