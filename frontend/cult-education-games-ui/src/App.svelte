<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import Introduction from "./components/Introduction.svelte";
</script>

<main class="container">
  <div class="text-center">
    <Introduction />
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
  </div>
</main>

<style>
</style>
