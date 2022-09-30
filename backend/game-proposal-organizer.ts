import { PersistenceService } from "./persistence-service.ts"
import { IGameProposal, IGameProposalInbound, IVote, IVoteInbound, IMasterkeyFileEntry, IApprenticeKeyFileEntry } from "./data-model.ts";
import { SortService, Direction, ISortOptions } from "https://deno.land/x/sort@v1.1.1/mod.ts"
import { DateDoctor } from "./date-doctor/date-doctor.ts"

export class GameProposalOrganizer {

    public static async addGameProposal(gameProposalInbound: IGameProposalInbound): Promise<void> {

        console.log(`adding game proposal ${JSON.stringify(gameProposalInbound)}`)

        const masterKeys = await PersistenceService.readMasterKeysFile()

        const masterKeyFileEntry: IMasterkeyFileEntry 
            = masterKeys.filter((m: IMasterkeyFileEntry) => m.masterKey === gameProposalInbound.fromMasterKey)[0]

        if (masterKeyFileEntry === undefined) {
            const errorMessage = `the masterkey ${gameProposalInbound.fromMasterKey} might be wrong.`
            console.log(errorMessage)
            throw new Error(errorMessage)
        }

        const gameProposals = await PersistenceService.readGameProposals()

        const gameProposal: IGameProposal = {
            id: (gameProposals[0] === undefined) ? 1 : gameProposals[0].id + 1, // we sort or use unshift accordingly before saving
            text: gameProposalInbound.text,
            proposalDateUTC: DateDoctor.getFormattedUTCDateFromDate(new Date()),
            expiryDateUTC: GameProposalOrganizer.getNextFreeExpiryDate(gameProposals),
            rating: 0,
            proposedBy: masterKeyFileEntry.socialMediaLink
        }

        gameProposals.unshift(gameProposal)

        await PersistenceService.writeGameProposals(gameProposals)

        console.log(`successfully added game proposal to ${PersistenceService.pathToGameProposals}`)

    }

    public static async addVoteOnGameProposal(voteInbound: IVoteInbound): Promise<void> {

        const apprenticeKeys = await PersistenceService.readApprenticeKeysFile()

        const apprenticeKeysEntry: IApprenticeKeyFileEntry = 
            apprenticeKeys.filter((m: IApprenticeKeyFileEntry) => m.apprenticeKey === voteInbound.fromApprenticeKey)[0]

        if (apprenticeKeysEntry === undefined) {
            const errorMessage = `the apprentice key ${voteInbound.fromApprenticeKey} might be wrong.`
            console.log(errorMessage)
            throw new Error(errorMessage)
        }

        console.log(`adding vote on game proposal ${JSON.stringify(voteInbound)}`)

        const vote: IVote = {
            id: voteInbound.id,
            votingDate: DateDoctor.getFormattedUTCDateFromDate(new Date()),
            rating: voteInbound.rating,
            voteBy: apprenticeKeysEntry.socialMediaLink
        }

        const votes: IVote[] = await PersistenceService.readVotes()

        votes.unshift(vote)

        await PersistenceService.writeVotes(votes)

    }


    public static getNextFreeExpiryDate(gameProposals: IGameProposal[]): string {

        if (gameProposals.length === 0) {
          return DateDoctor.getLastMomentOfTodayFromDate(new Date())
        }
        
        const sortOptions: ISortOptions[] = [
          { fieldName: 'expiryDateUTC', direction: Direction.DESCENDING }
        ]
    
        const sortedArray = SortService.sort(gameProposals, sortOptions)
    
        const latestExpiryDateInList = sortedArray[0].expiryDateUTC
    
        return DateDoctor.addOneDay(latestExpiryDateInList)
    
      }
}