import { writable } from 'svelte/store'

export const CultGameOfTheDayStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A',
  }
])

export const CultGameProposalStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
])
