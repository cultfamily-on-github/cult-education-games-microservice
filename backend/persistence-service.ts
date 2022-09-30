import { IGameProposal, IMasterkeyFileEntry } from "./data-model.ts";
// import { SortService, Direction } from "https://deno.land/x/sort@v1.1.1/mod.ts"
import { DateDoctor } from "./date-doctor/date-doctor.ts"

export class PersistenceService {

    public static pathToGameProposals = `${Deno.cwd()}/operational-data/game-proposals.json`;
    public static pathToMasterKeys = `${Deno.cwd()}/operational-data/master-keys.json`;
    public static pathToApprenticeKeys = `${Deno.cwd()}/operational-data/apprentice-keys.json`;
    public static pathToVotes = `${Deno.cwd()}/operational-data/votes.json`;

    public static async readGameProposals(): Promise<any[]> {

        console.log(`delivering proposals from ${PersistenceService.pathToGameProposals}`)

        const gameProposals: IGameProposal[] = JSON.parse(await Deno.readTextFile(PersistenceService.pathToGameProposals))

        return gameProposals

    }

    public static async addGameProposal(gameProposal: IGameProposal): Promise<void> {

        console.log(`adding game proposal ${JSON.stringify(gameProposal)}`)

        const masterKeys = JSON.parse(await Deno.readTextFile(PersistenceService.pathToMasterKeys))

        const masterKeyFileEntry: IMasterkeyFileEntry = masterKeys.filter((m: IGameProposal) => m.masterKey === gameProposal.fromMasterKey)[0]

        if (masterKeyFileEntry === undefined) {
            const errorMessage = `the masterkey ${gameProposal.fromMasterKey} might be wrong.`
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        const gameProposals = JSON.parse(await Deno.readTextFile(PersistenceService.pathToGameProposals))

        const newEntryInGameProposals: IGameProposal = {
            id: (gameProposals[0] === undefined) ? 1 : gameProposals[0].id + 1, // we sort or use unshift accordingly before saving
            text: gameProposal.text,
            proposalDateUTC: DateDoctor.getFormattedUTCDateFromDate(new Date()),
            expiryDateUTC: DateDoctor.getNextFreeExpiryDate(gameProposals),
            rating: 0,
            proposedBy: masterKeyFileEntry.socialMediaLink
        }

        gameProposals.unshift(newEntryInGameProposals)

        await Deno.writeTextFile(PersistenceService.pathToGameProposals, JSON.stringify(gameProposals))

        console.log(`successfully added game proposal to ${PersistenceService.pathToGameProposals}`)
    }

    public static async addVoteOnGameProposals(gameProposalID: number, vote: number): Promise<void> {

        console.log(`adding vote on game proposal ${gameProposalID}: ${vote}`)

        const gameProposals = JSON.parse(await Deno.readTextFile(PersistenceService.pathToVotes))

        return gameProposals

    }
}