import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { DateDoctor } from "./date-doctor.ts"


Deno.test("get end of a specific utc today", async () => {

    const dt = new Date()
    const formattedUTCDateFromDate = DateDoctor.getFormattedUTCDateFromDate(dt)
    const actualOutput = DateDoctor.getLastMomentOfTodayFromString(formattedUTCDateFromDate)
    const expectedOutput = '2022-09-30 00:00:00'
    
    // console.log(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate())
    // console.log(formattedUTCDateFromDate)
    // console.log(expectedOutput)

    assertEquals(actualOutput, expectedOutput)

})

