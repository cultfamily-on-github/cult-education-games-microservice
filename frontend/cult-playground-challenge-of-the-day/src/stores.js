import { writable } from 'svelte/store'

// will be sorted by rating and stored on backend - longterm perhaps also on-chain 

export const CultGameProposalStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A',
    utcDate: '2022-9-28',
  },
  {
    id: 2,
    rating: 9,
    text: 'Follow 10 new good people today who might love the CULTDAO. Look for common interests and connect with them - to learn, to make friends and to enhance our networks.',
    utcDate: '2022-9-29',
  },
  {
    id: 3,
    rating: 9,
    text: 'Invite 10 of your friends who might love the CULTDAO to https://discord.com/invite/wearecultdao to expand our network.',
    utcDate: '2022-9-30',
  },
  {
    id: 4,
    rating: 9,
    text: 'To all who use facebook: Offer each of your facebook friends 1.000 RVLT if they post a supportive statement regarding the CULTDAO.',
    utcDate: '2022-10-01',
  },
  {
    id: 5,
    rating: 9,
    text: 'Ensure #ElonMuskLovesCULT is trending on Twitter.',
    utcDate: '2022-10-02',
  },
  {
    id: 6,
    rating: 8,
    text: 'Ensure #SaylorLovesCULT is trending on Twitter.',
    utcDate: '2022-10-03',
  },
])
