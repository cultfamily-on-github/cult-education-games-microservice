<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import GameOfTheDay from "./components/GameOfTheDay.svelte";
  import HowItWorks from "./components/HowItWorks.svelte";
  import Motivation from "./components/Motivation.svelte";
    import SupportOrGiveFeedbackRequest from "./components/SupportOrGiveFeedbackRequest.svelte";
</script>

<main class="container">
  <div class="text-center">
    
    <h2>CULT Game Of The Day</h2>

    <GameOfTheDay />
    
    <Motivation />
    <HowItWorks />
    <FeedbackForm />
    <FeedbackList />
    <FeedbackStats />
    <SupportOrGiveFeedbackRequest />

  </div>
</main>

<style>
</style>
