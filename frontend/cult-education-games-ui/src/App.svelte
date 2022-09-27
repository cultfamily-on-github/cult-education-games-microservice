<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<main class="container">

  <h2>CULT Education & Promotion Games</h2>

  The games which can be found here might inspire people to inspire their friends to invest in CULT and RVLT. <br><br>
  It seems fair to give all people the chance to come on board early. <br><br> 
  So please collaborate to make this a fair and successful endeavor or - if you do not like that - please let us know what we can improve via 
  <a href="https://github.com/cultfamily-on-github/cult-education-games-microservice/issues" target="_blank"> 
  submitting an issue</a>.
  
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>

<style>
  a{
    color:white
  }
</style>
