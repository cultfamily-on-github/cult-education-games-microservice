<script>
  // import {onMount, onDestroy} from 'svelte'
  import {CultGameOfTheDayStore} from '../stores'
  import { fade, scale } from 'svelte/transition'
  import GameProposalItem from './GameProposalItem.svelte'

  // let feedback = []

  // const unsubscribe = CultGameProposalStore.subscribe((data) => feedback = data)

  // onMount(() => {
  //   console.log('mounted')
  // })

  // onDestroy(() => {
  //  unsubscribe()
  // })
</script>

{#each $CultGameOfTheDayStore as fb (fb.id)}
<div in:scale out:fade="{{ duration: 500 }}">
  <GameProposalItem item={fb} />
</div>
{/each}