<script>
  import { replaceContentToShowClickableLinks } from "../helpers";
  import { backendBaseURL } from "../stores";
  import Card from "./Card.svelte";

  export let item;
  let message = "";
  let apprenticeKey = "";
  let rating = 0;
  let showVotingOptions = false;
  let usersVoteForItem = 6
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

  const clickValue = (valueClicked) => {
    usersVoteForItem = valueClicked
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
      <!-- <RatingSelect on:rating-select={handleSelect} /> -->

      <ul class="rating">
        <li>
          <input type="radio" id="num1" name="rating" on:change={() => clickValue(1)} checked={usersVoteForItem===1} />
          <label for="num1">1</label>
        </li>
        <li>
          <input type="radio" id="num2" name="rating" on:change={() => clickValue(2)} checked={usersVoteForItem===2} />
          <label for="num2">2</label>
        </li>
        <li>
          <input type="radio" id="num3" name="rating" on:change={() => clickValue(3)} checked={usersVoteForItem===3} />
          <label for="num3">3</label>
        </li>
        <li>
          <input type="radio" id="num4" name="rating" on:change={() => clickValue(4)} checked={usersVoteForItem===4} />
          <label for="num4">4</label>
        </li>
        <li>
          <input type="radio" id="num5" name="rating" on:change={() => clickValue(5)} checked={usersVoteForItem===5} />
          <label for="num5">5</label>
        </li>
        <li>
          <input type="radio" id="num6" name="rating" on:change={() => clickValue(6)} checked={usersVoteForItem===6} />
          <label for="num6">6</label>
        </li>
        <li>
          <input type="radio" id="num7" name="rating" on:change={() => clickValue(7)} checked={usersVoteForItem===7} />
          <label for="num7">7</label>
        </li>
        <li>
          <input type="radio" id="num8" name="rating" on:change={() => clickValue(8)} checked={usersVoteForItem===8} />
          <label for="num8">8</label>
        </li>
        <li>
          <input type="radio" id="num9" name="rating" on:change={() => clickValue(9)} checked={usersVoteForItem===9} />
          <label for="num9">9</label>
        </li>
        <li>
          <input type="radio" id="num10" name="rating" on:change={() => clickValue(10)} checked={usersVoteForItem===10} />
          <label for="num10">10</label>
        </li>
      </ul>
      
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

.rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  [type='radio'] {
    opacity: 0;
  }

  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>
