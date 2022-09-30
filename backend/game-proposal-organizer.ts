import { PersistenceService } from "./persistence-service.ts"
import { IGameProposal, IGameProposalInbound, IVote, IVoteInbound, IMasterkeyFileEntry } from "./data-model.ts";
import { DateDoctor } from "./date-doctor/date-doctor.ts"

export class GameProposalOrganizer {

    public static async addGameProposal(gameProposal: IGameProposalInbound): Promise<void> {

        console.log(`adding game proposal ${JSON.stringify(gameProposal)}`)

        const masterKeys = await PersistenceService.readMasterKeysFile()

        const masterKeyFileEntry: IMasterkeyFileEntry = masterKeys.filter((m: IGameProposal) => m.masterKey === gameProposal.fromMasterKey)[0]

        if (masterKeyFileEntry === undefined) {
            const errorMessage = `the masterkey ${gameProposal.fromMasterKey} might be wrong.`
            console.log(errorMessage)
            throw new Error(errorMessage)
        }

        const gameProposals = await PersistenceService.readGameProposals()

        const newEntryInGameProposals: IGameProposal = {
            id: (gameProposals[0] === undefined) ? 1 : gameProposals[0].id + 1, // we sort or use unshift accordingly before saving
            text: gameProposal.text,
            proposalDateUTC: DateDoctor.getFormattedUTCDateFromDate(new Date()),
            expiryDateUTC: DateDoctor.getNextFreeExpiryDate(gameProposals),
            rating: 0,
            proposedBy: masterKeyFileEntry.socialMediaLink
        }

        gameProposals.unshift(newEntryInGameProposals)

        await PersistenceService.writeGameProposals(gameProposals)

        console.log(`successfully added game proposal to ${PersistenceService.pathToGameProposals}`)

    }

    public static async addVoteOnGameProposal(vote: IVoteInbound): Promise<void> {

        console.log(`adding vote on game proposal ${JSON.stringify(vote)}`)

        await PersistenceService.writeVotes(vote)

    }
}