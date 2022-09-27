import { writable } from 'svelte/store'

export const CultGameOfTheDayStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Ensure #StarlinkIsCULT #RumbleIsCULT #VitalikIsCULT #$CULT #CULTDAO are trending on twitter.',
  }
])

export const CultGameProposalStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Ensure #StarlinkIsCULT #RumbleIsCULT #VitalikIsCULT #$CULT #CULTDAO are trending on twitter.',
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
