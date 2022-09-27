<script>
  import {CultGameProposalStore} from '../stores'

  $: count = $CultGameProposalStore.length
  $: average = $CultGameProposalStore.reduce((a, {rating}) => a + rating, 0) / $CultGameProposalStore.length
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>