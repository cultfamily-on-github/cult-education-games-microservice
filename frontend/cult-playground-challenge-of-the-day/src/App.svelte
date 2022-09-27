<script>
  import ShowDetailsButton from "./components/buttons/ShowDetailsButton.svelte";
  import ShowPhilosophyButton from "./components/buttons/ShowPhilosophyButton.svelte";
  import ShowApprenticeModeButton from "./components/buttons/ShowApprenticeModeButton.svelte";
  import ShowMasterModeButton from "./components/buttons/ShowMasterModeButton.svelte";
  import GameOfTheDay from "./components/GameOfTheDay.svelte";
  import Philosophy from "./components/texts/Philosophy.svelte";
  import HowItWorks from "./components/texts/HowItWorks.svelte";
  import Levels from "./components/texts/Levels.svelte";
    import MasterModeForm from "./components/MasterModeForm.svelte";
    import ApprenticeModeForm from "./components/ApprenticeModeForm.svelte";

  // import FeedbackForm from "./components/feedbackComponents/FeedbackForm.svelte";
  // import FeedbackList from "./components/FeedbackList.svelte";
  // import FeedbackStats from "./components/FeedbackStats.svelte";

  let showDetails = false;
  let showPhilosophy = false;
  let showApprenticeMode = false;
  let showMasterMode = false;

  function changeShowDetails(newValue) {
    showDetails = newValue;
    if (showDetails) {
      showPhilosophy = false
      showApprenticeMode = false
      showMasterMode = false
    }
  }
  function changeShowPhilosophy(newValue) {
    showPhilosophy = newValue;
    if (showPhilosophy) {
      showDetails = false
      showApprenticeMode = false
      showMasterMode = false
    }
  }
  function changeShowApprenticeMode(newValue) {
    showApprenticeMode = newValue;
    if (showApprenticeMode) {
      showDetails = false
      showPhilosophy = false
      showMasterMode = false
    }
  }
  function changeShowMasterMode(newValue) {
    showMasterMode = newValue;
    if (showMasterMode) {
      showDetails = false
      showPhilosophy = false
      showApprenticeMode = false
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

    <p><br /></p>
    <ShowPhilosophyButton onChange={(newValue) => changeShowPhilosophy(newValue)}>Show Philosophy</ShowPhilosophyButton>
    {#if showPhilosophy}
      <Philosophy />
    {/if}
    <p><br /></p>

    <ShowApprenticeModeButton onChange={(newValue) => changeShowApprenticeMode(newValue)}>Show Apprentice Mode Features</ShowApprenticeModeButton>
    {#if showApprenticeMode}
      <ApprenticeModeForm />
    {/if}
    <p><br /></p>

    <ShowMasterModeButton onChange={(newValue) => changeShowMasterMode(newValue)}>
      Show MasterModeFeatures
    </ShowMasterModeButton>
    {#if showMasterMode}
      <MasterModeForm />
    {/if}
  </div>
</main>

<!-- <FeedbackForm />
  <FeedbackList />
  <FeedbackStats /> -->
<style>
</style>
