import { writable } from 'svelte/store'

export const CultGameOfTheDayStore = writable(
  {
    id: 1,
    rating: 10,
    text: 'Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A',
  }
)

export const CultGameProposalStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Ensure #VitalikLovesCULT is trending on Twitter.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Follow 20 new people today who might love the CULTDAO to expand our network.',
  },
  {
    id: 3,
    rating: 9,
    text: 'Invite 10 of your friends who might love the CULTDAO to https://discord.com/invite/wearecultdao to expand our network.',
  },
  {
    id: 4,
    rating: 9,
    text: 'To all who use facebook: Offer each of your facebook friends 1.000 RVLT if they post a supportive statement regarding the CULTDAO.',
  },
  {
    id: 5,
    rating: 9,
    text: 'Ensure #ElonMuskLovesCULT is trending on Twitter.',
  },
  {
    id: 6,
    rating: 8,
    text: 'Ensure #SaylorLovesCULT is trending on Twitter.',
  },
])
