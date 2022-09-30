<script>
  import { replaceContentToShowClickableLinks } from "../helpers";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";
  
  export let item;
  let message = "";
  let apprenticeKey = "";
  let rating = 0;

  const sendVote = async (itemId) => {
    try {
      // await fetch("http://localhost:8042/api/v1/addvoteongameproposal", {
      await fetch("http://cultplayground.org/api/v1/addvoteongameproposal", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: item.id,
          fromApprenticeKey: apprenticeKey,
        }),
      });

      message = "Submission Successful. Thank You.";
      apprenticeKey = "";
    } catch (error) {
      alert(`an error occurred: ${error.message}`);
    }
  };

  const handleSelect = (e) => {
    rating = e.detail;
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>

  <p><br /></p>

  <p class="text-display">
    {@html replaceContentToShowClickableLinks(item.text)}
  </p>

  <p />
  {#if message}
    <div class="message">
      {message}
      <p />
    </div>
  {:else}
    <RatingSelect on:rating-select={handleSelect} />
  {/if}

  {#if rating > 0}
    <div class="input-group">
      <input
        type="text"
        bind:value={apprenticeKey}
        placeholder="Please enter your Apprentice Key."
      />
    </div>
  {/if}
  {#if apprenticeKey !== ""}
    <p><br /></p>
    <div class="color-of-body">
      <button class="button-colors-on-Card" on:click={() => sendVote()}
        >Send</button
      >
    </div>
  {/if}
</Card>

<style>
</style>
