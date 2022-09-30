<script>
  import Levels from "./components/texts/Levels.svelte";
  import Philosophy from "./components/texts/Philosophy.svelte";
  import HowItWorks from "./components/texts/HowItWorks.svelte";
  import MasterModeForm from "./components/MasterModeForm.svelte";
  import GameOfTheDayItem from "./components/GameOfTheDayItem.svelte";
  import GameProposalItem from "./components/GameProposalItem.svelte";
  import Seo from "./Seo.svelte";
  import { fade, scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { getLastMomentOfTodayFromDate } from "./helpers";

  // import { CultGames } from "./stores";

  let gameProposals = [];
  let currentGameOfTheDay;
  let lastMomentOfToday;
  let showDetails = false;
  let showPhilosophy = false;
  let showMasterMode = false;
  let showProposalsMode = false;
  let showPastChallengesMode = false;
  let underConstructionMode = true;
  let visitorAlreadyProvedFancy = false;

  onMount(async () => {
    const response = await fetch(
      `http://localhost:8042/api/v1/getgameproposals`
    );

    gameProposals = await response.json();

    // currentGameOfTheDay = gameProposals[0];

    lastMomentOfToday = getLastMomentOfTodayFromDate(new Date());

    currentGameOfTheDay = gameProposals.filter(
      (e) => e.expiryDateUTC === lastMomentOfToday
    )[0];
  });

  const changeShowDetails = () => {
    showDetails = !showDetails;
    if (showDetails) {
      showPhilosophy = false;
      showProposalsMode = false;
      showMasterMode = false;
      showPastChallengesMode = false;
    }
  };

  const changeShowPhilosophy = () => {
    showPhilosophy = !showPhilosophy;
    if (showPhilosophy) {
      showDetails = false;
      showProposalsMode = false;
      showMasterMode = false;
      showPastChallengesMode = false;
    }
  };

  const changeShowProposalsMode = () => {
    showProposalsMode = !showProposalsMode;
    if (showProposalsMode) {
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
      showProposalsMode = false;
    }
  };

  const changeShowMasterMode = () => {
    showMasterMode = !showMasterMode;
    if (showMasterMode) {
      showDetails = false;
      showPhilosophy = false;
      showProposalsMode = false;
      showPastChallengesMode = false;
    }
  };

  const proveVisitorIsFancy = () => {
    visitorAlreadyProvedFancy = true
  }
</script>

<Seo
  title="CULT Game Of The Day"
  description="We are a network of cultdao.io fans promoting freedom, fairness, education and love."
/>

<main class="container">
  <div class="text-center">
    <h2>CULT Game Of The Day</h2>

    <p><br /></p>
    <a href="https://time.is/UTC" target="_blank" style="color: white;"> UTC</a>
    <p><br /></p>

    {#if currentGameOfTheDay}
      <!-- {JSON.stringify(currentGameOfTheDay)} -->
      <GameOfTheDayItem item={currentGameOfTheDay} />
    {/if}

    {#if underConstructionMode || visitorAlreadyProvedFancy}
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

      <button on:click={() => changeShowMasterMode()}>
        Add Game Proposal
      </button>
      {#if showMasterMode}
        <MasterModeForm />
      {/if}

      <p><br /></p>

      <button on:click={() => changeShowProposalsMode()}>
        Show Game Proposals
      </button>
      {#if showProposalsMode}
        {#each gameProposals as fb (fb.id)}
          <p><br /><br /><br /></p>

          <!-- {#if new Date(getYearFromString(fb.utcDate), getMonthFromString(fb.utcDate) - 1, getDayteFromString(fb.utcDate)) < utcLastSecondOfToday}
          This proposal belongs to the past
        {:else} -->
          <div in:scale out:fade={{ duration: 500 }}>
            <GameProposalItem item={fb} />
          </div>
          <!-- {/if} -->
        {/each}

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
      {/if}
    {:else}
      <button on:click={() => proveVisitorIsFancy()}> This is Fancy </button>
    {/if}
  </div>
</main>

<style>
</style>
