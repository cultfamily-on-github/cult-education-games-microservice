export const isBefore = (input1, input2) => {
    const date1 = getDateFromString(input1)
    const date2 = getDateFromString(input2)

    return date1 < date2
}


export const getDateFromString = (input) => {
    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    return new Date(Date.UTC(year, month, dayte, 0,0,0,0))
}


export const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0")
}


export const getFormattedUTCDateFromDate = (date) => {
    return (
        [
            //   date.getFullYear(),
            date.getUTCFullYear(),
            padTo2Digits(date.getUTCMonth() + 1),
            padTo2Digits(date.getUTCDate()),
        ].join("-") +
        " " +
        [
            padTo2Digits(date.getUTCHours()),
            padTo2Digits(date.getUTCMinutes()),
            padTo2Digits(date.getUTCSeconds()),
        ].join(":")
    )
}


export const getLastMomentOfTodayFromString = (input) => {
    const part1 = input.split(" ")[0]
    const part2 = "00:00:00"

    return `${part1} ${part2}`
}


export const getLastMomentOfTodayFromDate = (date) => {
    const formattedUTCDateFromDate = getFormattedUTCDateFromDate(date)
    return getLastMomentOfTodayFromString(formattedUTCDateFromDate)
}

export const getDateOfLastMomentOfTodayFromDate = (date) => {
    const formattedUTCDateFromDate = getFormattedUTCDateFromDate(date)
    return getLastMomentOfTodayFromString(formattedUTCDateFromDate)
}

export const addOneDay = (input) => {

    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    const currentDate = new Date(Date.UTC(year, month, dayte))

    const oneDayLaterTimestamp = currentDate.setDate(currentDate.getDate() + 1)

    const result = getFormattedUTCDateFromDate(new Date(oneDayLaterTimestamp))

    return result
}