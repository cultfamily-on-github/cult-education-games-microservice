<script>
  // import {onMount, onDestroy} from 'svelte'
  import {CultGameProposalStore} from '../stores'
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from './FeedbackItem.svelte'

  // let feedback = []

  // const unsubscribe = CultGameProposalStore.subscribe((data) => feedback = data)

  // onMount(() => {
  //   console.log('mounted')
  // })

  // onDestroy(() => {
  //  unsubscribe()
  // })
</script>

{#each $CultGameProposalStore as fb (fb.id)}
<div in:scale out:fade="{{ duration: 500 }}">
  <FeedbackItem item={fb} />
</div>
{/each}