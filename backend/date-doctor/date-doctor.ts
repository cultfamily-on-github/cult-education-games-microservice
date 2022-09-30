import { IGameProposal } from "../data-model.ts"
import { SortService, Direction, ISortOptions } from "https://deno.land/x/sort@v1.1.1/mod.ts"

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

  public static getNextFreeExpiryDate(gameProposals: IGameProposal[]): string {

    const sortOptions: ISortOptions[] = [
      { fieldName: 'expiryDateUTC', direction: Direction.DESCENDING }
    ]

    const sortedArray = SortService.sort(gameProposals, sortOptions)

    const latestExpiryDateInList = sortedArray[0].expiryDateUTC

    return DateDoctor.addOneDay(latestExpiryDateInList)

  }

  public static addOneDay(input: string): string {

    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    const currentDate = new Date(Date.UTC(year, month, dayte))

    const oneDayLaterTimestamp = currentDate.setDate(currentDate.getDate() + 1)

    const result = DateDoctor.getFormattedUTCDateFromDate(new Date(oneDayLaterTimestamp))

    return result
  }

}