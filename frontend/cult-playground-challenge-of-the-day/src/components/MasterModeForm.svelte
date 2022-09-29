<script>
  import { v4 as uuidv4 } from "uuid";
  import { CultGames } from "../stores";
  import Card from "./Card.svelte";
  import Button from "./buttons/SendButton.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let masterKey = "";
  let rating = 10;
  let btnDisabled = true;
  let min = 20;
  let message;

  const handleSelect = (e) => (rating = e.detail);

  const handleMasterKey = () => {
    if (text.trim().length <= 42) {
      message = `Masterkey must be at least 42 characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleMasterKeyInput = () => {
    // maybe introduce validations here to reduce amount of fake requests
  };

  const handleInput = () => {

    if(text.trim().length <= min) {
      message = `The Proposal Text must be at least ${min} characters`
      btnDisabled = true
    } else {
      message = null
      btnDisabled = false
    }
  };

  const handleSubmit = () => {

  alert("nice try :) you can't be a master here yet because this playground is just getting started.");

  //   if (text.trim().length > min) {
  //     const newFeedback = {
  //       id: uuidv4(),
  //       text,
  //       rating: +rating,
  //     };

  //     CultGames.update((currentFeedback) => {
  //       return [newFeedback, ...currentFeedback];
  //     });

  //     text = "";
  //   }
  };
</script>

<Card>
  <header>
    <h2>Master Mode</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <!-- <RatingSelect on:rating-select={handleSelect} /> -->
    <div class="input-group">
      <input
        type="text"
        on:input={handleMasterKeyInput}
        bind:value={masterKey}
        placeholder="Please enter your Masterkey"
      />
    </div>

    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Please enter your Challenge of the Day Proposal"
      />
    </div>
    <p><br /></p>
    <Button disabled={btnDisabled} type="submit">Send</Button>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
