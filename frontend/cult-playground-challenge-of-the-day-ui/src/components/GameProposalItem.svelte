<script>
  import { replaceContentToShowClickableLinks } from "../helpers";
  import { backendBaseURL } from "../stores";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  export let item;
  let message = "";
  let apprenticeKey = "";
  let rating = 0;
  let showVotingOptions = false;

  const sendVote = async (itemId) => {
    alert("the voting feature will be available starting on october 2nd");
    //   try {
    //     await fetch(`${backendBaseURL}.org/api/v1/addvoteongameproposal`, {
    //       method: "post",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },

    //       body: JSON.stringify({
    //         id: item.id,
    //         fromApprenticeKey: apprenticeKey,
    //       }),
    //     });

    //     message = "Submission Successful. Thank You.";
    //     apprenticeKey = "";
    //   } catch (error) {
    //     alert(`an error occurred: ${error.message}`);
    //   }
  };

  const vote = () => {
    showVotingOptions = !showVotingOptions;
  };

  const handleSelect = (e) => {
    // alert(e.detail)
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>

  <p><br /></p>
  <h3>Scheduled for {item.expiryDateUTC.split(" ")[0]} UTC</h3>
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
    <p><br /></p>
    <div class="color-of-body">
      

      <!-- you can dispatch the info on which item visitor is currently voting - updating the display for the other items...  -->

      <button class="button-colors-on-Card" on:click={() => vote()}
        >Vote on this Proposal</button
      >
    </div>

    {#if showVotingOptions}
      <RatingSelect on:rating-select={handleSelect} />
    {/if}
  {/if}

  {#if rating > 0}
    <div class="input-group">
      <input
        type="text"
        bind:value={apprenticeKey}
        placeholder="Please enter your Apprentice- or Master Key."
      />
    </div>
  {/if}
  {#if apprenticeKey !== ""}
    <p><br /></p>
    <div class="color-of-body">
      <button class="button-colors-on-Card" on:click={() => sendVote()}
        >Send Your Vote</button
      >
    </div>
  {/if}
</Card>

<style>
</style>
