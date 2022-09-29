<script>
  import Philosophy from "./components/texts/Philosophy.svelte";
  import HowItWorks from "./components/texts/HowItWorks.svelte";
  import Levels from "./components/texts/Levels.svelte";
  import MasterModeForm from "./components/MasterModeForm.svelte";
  import {CultGames} from './stores'
  import GameOfTheDayItem from './components/GameOfTheDayItem.svelte'
  import Seo from "./Seo.svelte";
  import { fade, scale } from 'svelte/transition'
  import GameProposalItem from './components/GameProposalItem.svelte'

  let showDetails = false;
  let showPhilosophy = false;
  let showMasterMode = false;
  let showApprenticeMode = false;
  let showPastChallengesMode = false;

  const changeShowDetails = () => {
    showDetails = !showDetails;
    if (showDetails) {
      showPhilosophy = false;
      showApprenticeMode = false;
      showMasterMode = false;
      showPastChallengesMode = false;
    }
  };

  const changeShowPhilosophy = () => {
    showPhilosophy = !showPhilosophy;
    if (showPhilosophy) {
      showDetails = false;
      showApprenticeMode = false;
      showMasterMode = false;
      showPastChallengesMode = false;
    }
  };
  
  const changeShowApprenticeMode = () => {
    showApprenticeMode = !showApprenticeMode;
    if (showApprenticeMode) {
      showDetails = false;
      showPhilosophy = false;
      showMasterMode = false;
      showPastChallengesMode = false;
    }
  };

  const changeShowPastChallenges = () => {
    showPastChallengesMode = !showPastChallengesMode;
    if (showPastChallengesMode) {
      showDetails = false;
      showPhilosophy = false;
      showMasterMode = false;
      showApprenticeMode = false;
    }
  };
  
  const changeShowMasterMode = () => {
    showMasterMode = !showMasterMode;
    if (showMasterMode) {
      showDetails = false;
      showPhilosophy = false;
      showApprenticeMode = false;
      showPastChallengesMode = false;
    }
  };

  let dt = new Date()
  let utcToday = `${dt.getUTCFullYear()}-${dt.getUTCMonth()+1}-${dt.getUTCDate()}`
  let currentGameOfTheDay = $CultGames.filter((e) => e.utcDate === utcToday)[0]

</script>

<Seo
	title="CULT Game Of The Day"
	description="We are a network of cultdao.io fans promoting freedom, fairness, education and love."
/>

<main class="container">
  <div class="text-center">
    <h2>CULT Game Of The Day</h2>
    <p><br></p>
    {utcToday} <a href="https://time.is/UTC" target="_blank" style="color: white;"> UTC</a>
    <p><br></p>

    <GameOfTheDayItem item={currentGameOfTheDay} />

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
      Show Game Proposals
    </button>
    {#if showApprenticeMode}
    {#each $CultGames as fb (fb.id)}
    <div in:scale out:fade="{{ duration: 500 }}">
      <GameProposalItem item={fb} />
    </div>
    {/each}
    {/if}

    <p><br /></p>

    <!-- <button on:click={() => changeShowPastChallenges()}>
      Show Past Games
    </button>
    {#if showPastChallengesMode}
      {#each $CultGames as fb (fb.id)}
      <div in:scale out:fade="{{ duration: 500 }}">
        <GameOfThePastItem item={fb} />
      </div>
      {/each}
    {/if}
    <p><br /></p> -->
  </div>
</main>

<style>

</style>
