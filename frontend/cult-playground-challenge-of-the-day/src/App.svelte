<script>
  import ShowDetailsButton from "./components/buttons/ShowDetailsButton.svelte";
  // import FeedbackForm from "./components/feedbackComponents/FeedbackForm.svelte";
  // import FeedbackList from "./components/FeedbackList.svelte";
  // import FeedbackStats from "./components/FeedbackStats.svelte";
  import GameOfTheDay from "./components/GameOfTheDay.svelte";
  import HowItWorks from "./components/HowItWorks.svelte";
  import Levels from "./components/Levels.svelte";
  import Motivation from "./components/Motivation.svelte";
  import SupportOrGiveFeedbackRequest from "./components/SupportOrGiveFeedbackRequest.svelte";
  let showDetailsInParent = true;
</script>

<main class="container">
  <div class="text-center">
    <h2>CULT Game Of The Day</h2>

    <GameOfTheDay />
    <Levels />
    <ShowDetailsButton onChange={(newValue) => {showDetailsInParent = newValue}}>Show Details</ShowDetailsButton>

    {#if showDetailsInParent}
      <HowItWorks />
    {/if}
      <Motivation />
      <SupportOrGiveFeedbackRequest />
    </div>
  </main>
  
  <!-- <FeedbackForm />
  <FeedbackList />
  <FeedbackStats /> -->

<style>
  </style>
