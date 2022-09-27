<script>
  import ShowDetailsButton from "./components/buttons/ShowDetailsButton.svelte";
  import ShowPhilosophyButton from "./components/buttons/ShowPhilosophyButton.svelte";
  import GameOfTheDay from "./components/GameOfTheDay.svelte";
  import Philosophy from "./components/texts/Philosophy.svelte";
  import HowItWorks from "./components/texts/HowItWorks.svelte";
  import Levels from "./components/texts/Levels.svelte";

  // import FeedbackForm from "./components/feedbackComponents/FeedbackForm.svelte";
  // import FeedbackList from "./components/FeedbackList.svelte";
  // import FeedbackStats from "./components/FeedbackStats.svelte";

  let showDetails = true;
  let showPhilosophy = true;

  function changeShowDetails(newValue) {
    showDetails = newValue;
    if (showDetails) {
      showPhilosophy = false
    }
  }
  function changeShowPhilosophy(newValue) {
    showPhilosophy = newValue;
    if (showPhilosophy) {
      showDetails = false
    }
  }
</script>

<main class="container">
  <div class="text-center">
    <h2>CULT Game Of The Day</h2>

    <GameOfTheDay />
    <Levels />

    <ShowDetailsButton onChange={(newValue) => changeShowDetails(newValue)}>Show Details</ShowDetailsButton>

    {#if showDetails}
      <HowItWorks />
    {/if}

    <p><br /><br /></p>
    <ShowPhilosophyButton onChange={(newValue) => changeShowPhilosophy(newValue)}>Show Philosophy</ShowPhilosophyButton>
    {#if showPhilosophy}
      <Philosophy />
    {/if}
  </div>
</main>

<!-- <FeedbackForm />
  <FeedbackList />
  <FeedbackStats /> -->
<style>
</style>
