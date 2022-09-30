export interface IMasterkeys {
    socialMediaLink: string
    masterKey: string
}

export interface IApprenticeKeys {
    socialMediaLink: string
    apprenticeKey: string
}

export interface IGameProposalInbound {
    text: string
    masterKey: string
}

export interface IGameProposal {
    id: number,
    text: string,
    proposalDateUTC: string,
    executionDateUTC: string,
    rating: 10,
    masterKey: string
}