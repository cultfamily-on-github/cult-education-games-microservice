<script>
  import Philosophy from "./components/texts/Philosophy.svelte";
  import HowItWorks from "./components/texts/HowItWorks.svelte";
  import Levels from "./components/texts/Levels.svelte";
  import MasterModeForm from "./components/MasterModeForm.svelte";
  import ApprenticeModeForm from "./components/ApprenticeModeForm.svelte";
  import {CultGameOfTheDayStore} from './stores'
  import GameProposalItem from './components/GameProposalItem.svelte'

  // import ShowApprenticeModeButton from "./components/buttons/ShowApprenticeModeButton.svelte";

  // import FeedbackForm from "./components/feedbackComponents/FeedbackForm.svelte";
  // import FeedbackList from "./components/FeedbackList.svelte";
  // import FeedbackStats from "./components/FeedbackStats.svelte";

  let showDetails = false;
  let showPhilosophy = false;
  let showApprenticeMode = false;
  let showMasterMode = false;

  const changeShowDetails = () => {
    showDetails = !showDetails;
    if (showDetails) {
      showPhilosophy = false;
      showApprenticeMode = false;
      showMasterMode = false;
    }
  };

  const changeShowPhilosophy = () => {
    showPhilosophy = !showPhilosophy;
    if (showPhilosophy) {
      showDetails = false;
      showApprenticeMode = false;
      showMasterMode = false;
    }
  };
  
  const changeShowApprenticeMode = () => {
    showApprenticeMode = !showApprenticeMode;
    if (showApprenticeMode) {
      showDetails = false;
      showPhilosophy = false;
      showMasterMode = false;
    }
  };
  
  const changeShowMasterMode = () => {
    showMasterMode = !showMasterMode;
    if (showMasterMode) {
      showDetails = false;
      showPhilosophy = false;
      showApprenticeMode = false;
    }
  };
</script>

<main class="container">
  <div class="text-center">
    <h2>CULT Game Of The Day</h2>

    <GameProposalItem mode='cultGameOfTheDay' item={$CultGameOfTheDayStore} />
    <Levels />

    <button on:click={() => changeShowDetails()}> Show Details </button>
    {#if showDetails}
      <HowItWorks />
    {/if}

    <p><br /></p>

    <button on:click={() => changeShowPhilosophy()}> Show Philosophy </button>
    {#if showPhilosophy}
      <Philosophy />
    {/if}

    <p><br /></p>
    
    
    <button on:click={() => changeShowMasterMode()}> Show Master Mode </button>
    {#if showMasterMode}
    <MasterModeForm />
    {/if}
    
    <p><br /></p>

    <button on:click={() => changeShowApprenticeMode()}>
      Show Challenge Proposals
    </button>
    {#if showApprenticeMode}
      <ApprenticeModeForm />
    {/if}
    <p><br /></p>
  </div>
</main>

<!-- <FeedbackForm />
  <FeedbackList />
  <FeedbackStats /> -->
<style>
</style>
