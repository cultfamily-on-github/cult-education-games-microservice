export class DateDoctor {

  public static padTo2Digits(num: number) {
    return num.toString().padStart(2, "0")
  }

  public static getFormattedUTCDateFromDate(date: any): string {
    return (
      [
        //   date.getFullYear(),
        date.getUTCFullYear(),
        DateDoctor.padTo2Digits(date.getUTCMonth() + 1),
        DateDoctor.padTo2Digits(date.getUTCDate()),
      ].join("-") +
      " " +
      [
        DateDoctor.padTo2Digits(date.getUTCHours()),
        DateDoctor.padTo2Digits(date.getUTCMinutes()),
        DateDoctor.padTo2Digits(date.getUTCSeconds()),
      ].join(":")
    )
  }

  public static getLastMomentOfTodayFromString(input: string): string {
    const part1 = input.split(" ")[0]
    const part2 = "00:00:00"

    return `${part1} ${part2}`
  }

  public static getLastMomentOfTodayFromDate(date: any): string {
    const formattedUTCDateFromDate = DateDoctor.getFormattedUTCDateFromDate(date)
    return DateDoctor.getLastMomentOfTodayFromString(formattedUTCDateFromDate)
  }
}