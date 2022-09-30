<script>
  import { v4 as uuidv4 } from "uuid";
  import { CultGames } from "../stores";
  import Card from "./Card.svelte";
  import Button from "./buttons/SendButton.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let masterKey = "";
  let rating = 10;
  let min = 20;
  let message;

  const handleSelect = (e) => (rating = e.detail);

  const handleMasterKeyInput = () => {
    // maybe introduce validations here to reduce amount of fake requests
  };

  const handleSubmit = async () => {
    // alert("nice try :) you can't be a master here yet because this playground is just getting started.");

    try {
      await fetch("http://localhost:8042/api/v1/addgameproposal", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          text,
          fromMasterKey: masterKey
        }),
      });
    } catch (error) {
      alert(`an error occurred. please contact michael. tell him: ${error.message}`)

      /* an example request body could look like: 
      {
          text: "Explain to your neighbor how to install metamask.io and how to buy 1000000 CULT on https://uniswap.org.",
          fromMasterKey: "michaelsdemomasterkey"
      }*/

    }
  }
</script>

<Card>
  <form on:submit|preventDefault={handleSubmit}>
    <!-- <RatingSelect on:rating-select={handleSelect} /> -->
    <div class="input-group">
      <input
        type="text"
        bind:value={masterKey}
        placeholder="Please enter your Masterkey."
      />
    </div>

    <div class="input-group">
      <input
        type="text"
        bind:value={text}
        placeholder="Please enter your Gameproposal."
      />
    </div>
    <p><br /></p>
    <Button type="submit">Send</Button>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>

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
