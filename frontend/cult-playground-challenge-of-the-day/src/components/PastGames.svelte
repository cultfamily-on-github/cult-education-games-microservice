<script>
  import {CultGameProposalStore} from '../stores'
  import { fade, scale } from 'svelte/transition'
  import GameOfThePastItem from './GameOfThePastItem.svelte'

  let validOnUTCYear = item.utcDate.split("-")[0]
  let validOnUTCMonth = item.utcDate.split("-")[1].split("-")[0]
  let validOnUTCDayte = item.utcDate.substr(item.utcDate.length-2, 2)
  let validOnUTCTime = new Date( Date.UTC(validOnUTCYear, validOnUTCDayte, validOnUTCMonth, 23, 59, 59) ).getTime()

  const currentUTCDate = new Date (Date.UTC())
  const itemUTCDate = new Date (Date.UTC())

</script>


{#each $CultGameProposalStore as fb (fb.id)}

{#if currentUTCDate > itemUTCDate}
  aasdf
{/if}


<!-- <div in:scale out:fade="{{ duration: 500 }}">
  <GameOfThePastItem item={fb} />
</div> -->
{/each}