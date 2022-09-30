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

export interface IVoteInbound {
    id: number,
    rating: number,
    apprenticeKey: string
}

export interface IVote {
    id: number,
    votingDate: string,
    rating: number,
    voteBy: string
}