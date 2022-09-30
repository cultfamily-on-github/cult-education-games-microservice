export interface IMasterkeyFileEntry {
    socialMediaLink: string
    masterKey: string
}

export interface IApprenticeKeyFileEntry {
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
    expiryDateUTC: string,
    rating: number,
    proposedBy: string
}