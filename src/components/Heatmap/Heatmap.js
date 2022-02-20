import moment from "moment"
import Timeline from "./Timeline";

const daysInYear = (year) => {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}

const getDayOfYear = (datePretty) => {
    let date = new Date(datePretty);
    let start = new Date(date.getFullYear(), 0, 0);
    let diff = date - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);

    return day;
}

const Heatmap = ({year, yearData}) => {
    let startDate = moment().year(year).dayOfYear(1);
    let dateRange = [startDate, moment().year(year).dayOfYear(daysInYear(year))];

    let data = Array.from(new Array(daysInYear(year))).map((_, index) => {
        let dayValue = 0;
        for (let i = 0; i < yearData.length; i++) {
            const dayObject = yearData[i];

            const day = getDayOfYear(dayObject.date);
    
            if (index + 1 === day) {
                dayValue = dayObject.items.length;
            }
        }

        return {
            date: moment(startDate).add(index, 'day'),
            value: dayValue,
            dayOfYear: index + 1
        }
    })

    return (
        <>
            <span>{year}</span>
            <Timeline range={dateRange} data={data} colorFunc={({alpha}) => `rgba(3, 160, 3, ${alpha})`} />
        </>
    )
}

export default Heatmap
