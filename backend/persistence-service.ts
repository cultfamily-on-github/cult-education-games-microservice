import { IGameProposal } from "./data-model.ts";

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

        const entry = masterKeys.filter((m: IGameProposal) => m.masterKey === gameProposal.masterKey)[0]
        if (entry === undefined) {
            throw new Error(`the masterkey which you have provided might be wrong.`)
        }

        const gameProposals = JSON.parse(await Deno.readTextFile(PersistenceService.pathToGameProposals))
        gameProposals.push(gameProposal)
        await Deno.writeTextFile(JSON.stringify(gameProposals))

    }

    public static async addVoteOnGameProposals(gameProposalID: number, vote: number): Promise<void> {

        console.log(`adding vote on game proposal ${gameProposalID}: ${vote}`)

        const gameProposals = JSON.parse(await Deno.readTextFile(PersistenceService.pathToVotes))

        return gameProposals

    }
}