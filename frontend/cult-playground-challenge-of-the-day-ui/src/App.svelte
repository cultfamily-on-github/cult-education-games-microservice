<script>
  import Levels from "./components/texts/Levels.svelte";
  import Philosophy from "./components/texts/Philosophy.svelte";
  import HowItWorks from "./components/texts/HowItWorks.svelte";
  import MasterModeForm from "./components/MasterModeForm.svelte";
  import GameOfTheDayItem from "./components/GameOfTheDayItem.svelte";
  import GameProposalItem from "./components/GameProposalItem.svelte";
  import Seo from "./Seo.svelte";
  import { fade, scale } from "svelte/transition";
  import { CultGames } from "./stores";

  let showDetails = false;
  let showPhilosophy = false;
  let showMasterMode = false;
  let showProposalsMode = false;
  let showPastChallengesMode = false;

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

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date) => {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getUTCMonth() + 1),
        padTo2Digits(date.getUTCDate()),
      ].join("-") +
      " " +
      [
        padTo2Digits(date.getUTCHours()),
        padTo2Digits(date.getUTCMinutes()),
        padTo2Digits(date.getUTCSeconds()),
      ].join(":")
    );
  };

  const getYearFromString = (dateString) => {
    return dateString.split("-")[0];
  };
  const getMonthFromString = (dateString) => {
    return dateString.split("-")[1].split("-")[0];
  };
  const getDayteFromString = (dateString) => {
    return dateString.substr(dateString.length - 2, 2);
  };

  let dt = new Date();

  let utcToday = `${dt.getUTCFullYear()}-${
    dt.getUTCMonth() + 1
  }-${dt.getUTCDate()}`;

  let currentGameOfTheDay = $CultGames.filter((e) => e.utcDate === utcToday)[0];

  let magic = new Date();
  // alert(dt.getUTCFullYear())
  // alert(dt.getUTCDate())
  // alert(dt.getUTCMonth())
  let magic2 = new Date().toUTCString();

  let utcLastSecondOfToday = new Date(Date.UTC(2022, 8, 29, 23, 59, 59));
  let utcEndOfToday = new Date(Date.UTC(2022, 8, 29, 0, 0, 0));
  let date = new Date()
</script>

<Seo
  title="CULT Game Of The Day"
  description="We are a network of cultdao.io fans promoting freedom, fairness, education and love."
/>

<main class="container">
  <div class="text-center">
    <h2>CULT Game Of The Day</h2>
    <p><br /></p>
    {utcToday}
    <a href="https://time.is/UTC" target="_blank" style="color: white;"> UTC</a>
    <p><br /></p>

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

    <button on:click={() => changeShowProposalsMode()}>
      Show Game Proposals
    </button>
    {#if showProposalsMode}
      {#each $CultGames as fb (fb.id)}
        <p><br /><br /><br /></p>

        utcEndOfToday: {utcEndOfToday} <br />
        date: {date} <br />
        <!-- utcToday2: {formatDate(utcLastSecondOfToday)} <br /> -->
        vs. <br />
        utcItem: {new Date()} <br />
        <!-- {fb.utcDate} <br /> -->
        <!-- utcItem: {fb.utcDate} <br />
        utcToday: {utcToday} <br />
        magic: {magic} <br />
        magic2: {magic2} <br />
        magic3: {magic3} <br /> -->
        {#if new Date(getYearFromString(fb.utcDate), getMonthFromString(fb.utcDate) - 1, getDayteFromString(fb.utcDate)) < utcLastSecondOfToday}
          This proposal belongs to the past
        {:else}
          <div in:scale out:fade={{ duration: 500 }}>
            <GameProposalItem item={fb} />
          </div>
        {/if}
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
