import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { GameProposalOrganizer } from "./game-proposal-organizer.ts"
import { DateDoctor } from "./date-doctor/date-doctor.ts"
import { IGameProposal } from "./data-model.ts"

Deno.test("isAfter", async () => { 

    const exampleExpiryDate1 = "9999-10-04 00:00:00"
    const exampleExpiryDate2 = "2022-10-01 00:00:00"
    const lastMomentOfToday = "2022-10-02 23:59:59"

    assertEquals(DateDoctor.isAfter(exampleExpiryDate1, lastMomentOfToday), true)
    assertEquals(DateDoctor.isAfter(exampleExpiryDate2, lastMomentOfToday), false)
})

Deno.test("get future games sort them by rating ... and give them according expiryDates", async () => {

    const gameProposalOrganizer = new GameProposalOrganizer()
    // const allGames = await gameProposalOrganizer.getGameProposals()
    const allGames = testData
    const futureGames = await gameProposalOrganizer.getFutureGames(allGames)

    const expectedOutput1 = [
        {
            "id": 4,
            "text": "d",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "9999-10-03 00:00:00",
            "rating": 0,
            "proposedBy": "https://twitter.com/Peer2PeerE",
            "currentVisitorsVoteForItem": 6
        },
        {
            "id": 5,
            "text": "e",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "9999-10-04 00:00:00",
            "rating": 0,
            "proposedBy": "https://twitter.com/Peer2PeerE",
            "currentVisitorsVoteForItem": 6
        }
    ]

    assertEquals(futureGames, expectedOutput1)


    // const expectedOutput2 = [
    //     {
    //         "id": 4,
    //         "text": "d",
    //         "proposalDateUTC": "2022-09-30 10:46:14",
    //         "expiryDateUTC": "9999-10-01 00:00:00",
    //         "rating": 6,
    //         "proposedBy": "https://twitter.com/Peer2PeerE",
    //         "currentVisitorsVoteForItem": 6
    //     },
    //     {
    //         "id": 3,
    //         "text": "c",
    //         "proposalDateUTC": "2022-09-30 10:46:14",
    //         "expiryDateUTC": "9999-10-01 00:00:00",
    //         "rating": 4,
    //         "proposedBy": "https://twitter.com/Peer2PeerE",
    //         "currentVisitorsVoteForItem": 6
    //     }
    // ]

    // const sortedFutureGamesRaw = await gameProposalOrganizer.sortGamesByRatingAndExpiryDate(futureGames)

    // const lastMomentOfToday = DateDoctor.getLastMomentOfTodayFromDate(new Date())

    // let oneDayIntoTheFuture = DateDoctor.addOneDay(lastMomentOfToday)

    // const sortedFutureGames: IGameProposal[] = []

    // for (const futureGame of sortedFutureGamesRaw) {

    //     futureGame.expiryDateUTC = oneDayIntoTheFuture

    //     sortedFutureGames.push(futureGame)
    //     oneDayIntoTheFuture = DateDoctor.addOneDay(oneDayIntoTheFuture)

    // }


    // const expectedOutput3 = [
    //     {
    //         "id": 4,
    //         "text": "d",
    //         "proposalDateUTC": "2022-09-30 10:46:14",
    //         "expiryDateUTC": "2022-10-03 00:00:00",
    //         "rating": 6,
    //         "proposedBy": "https://twitter.com/Peer2PeerE",
    //         "currentVisitorsVoteForItem": 6
    //     },
    //     {
    //         "id": 3,
    //         "text": "c",
    //         "proposalDateUTC": "2022-09-30 10:46:14",
    //         "expiryDateUTC": "2022-10-04 00:00:00",
    //         "rating": 4,
    //         "proposedBy": "https://twitter.com/Peer2PeerE",
    //         "currentVisitorsVoteForItem": 6
    //     }
    // ]

    // assertEquals(sortedFutureGames, expectedOutput3)
})


// Deno.test("get executed or started games", async () => {

//     const actualOutput = await GameProposalOrganizer.getExecutedOrStartedGames()

//     const expectedOutput = [
//         {
//             "id": 1,
//             "text": "a",
//             "proposalDateUTC": "2022-09-30 10:46:14",
//             "expiryDateUTC": "2022-09-30 00:00:00",
//             "rating": 0,
//             "proposedBy": "https://twitter.com/Peer2PeerE",
//             "currentVisitorsVoteForItem": 7
//         },
//         {
//             "id": 1,
//             "text": "b",
//             "proposalDateUTC": "2022-09-30 10:46:14",
//             "expiryDateUTC": "2022-10-01 00:00:00",
//             "rating": 0,
//             "proposedBy": "https://twitter.com/Peer2PeerE",
//             "currentVisitorsVoteForItem": 6
//         }
//     ]
//     assertEquals(actualOutput, expectedOutput)

// })

// Deno.test("get next free expiry date", async () => {

//     const testInput = [
//         {
//             "id": 1,
//             "text": "a",
//             "proposalDateUTC": "2022-09-30 10:46:14",
//             "expiryDateUTC": "2022-09-30 00:00:00",
//             "rating": 0,
//             "proposedBy": "https://twitter.com/Peer2PeerE",
//             "currentVisitorsVoteForItem": 7
//         },
//         {
//             "id": 1,
//             "text": "a",
//             "proposalDateUTC": "2022-09-30 10:46:14",
//             "expiryDateUTC": "2022-10-01 00:00:00",
//             "rating": 0,
//             "proposedBy": "https://twitter.com/Peer2PeerE",
//             "currentVisitorsVoteForItem": 6
//         }
//     ]

//     const actualOutput = GameProposalOrganizer.getNextFreeExpiryDate(testInput)
//     const expectedOutput = "2022-10-02 00:00:00"
//     assertEquals(actualOutput, expectedOutput)

// })


const testData = [

    {
        "id": 1,
        "text": "a",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "2022-09-30 00:00:00",
        "rating": 0,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 7
    },
    {
        "id": 2,
        "text": "b",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "2022-10-01 00:00:00",
        "rating": 4,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 6
    },
    {
        "id": 3,
        "text": "c",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "2022-10-02 00:00:00",
        "rating": 6,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 6
    },
    {
        "id": 4,
        "text": "d",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "9999-10-03 00:00:00",
        "rating": 0,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 6
    },
    {
        "id": 5,
        "text": "e",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "9999-10-04 00:00:00",
        "rating": 0,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 6
    }
]