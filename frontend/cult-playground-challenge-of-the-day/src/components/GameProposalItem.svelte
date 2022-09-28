<script>
  import { CultGameProposalStore } from "../stores";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";
  export let mode = "";
  export let item;

  let text = "";
  let apprenticeKey = "";
  let rating = 10;

  const handleLetsDoIt = (text) => {
    const firstLinkInText = getFirstLinkInText(text);
    if (text.indexOf("https://") === -1) {
      alert(`ok. just do it.`);
    } else {
      window.open(firstLinkInText, "_blank");
    }
  };

  const getFirstLinkInText = (text) => {
    let link = "";
    let indexOfFirstLinkStart = text.indexOf("https://");
    if (indexOfFirstLinkStart === -1) {
      // no link in text
    } else {
      let restText = text.substr(indexOfFirstLinkStart, text.length);
      let indexOfFirstLinkEnd = restText.indexOf(" ") - 1;

      if (indexOfFirstLinkEnd === -2) {
        // if end of link equals end of text
        link = restText;
      } else {
        link = restText.substr(0, indexOfFirstLinkEnd);
      }
    }

    return link;
  };

  const handleVoteRequest = (itemId) => {
    alert(
      `nice try :) you can't be an apprentice yet, because this playground is just getting started.`
    );

    // CultGameProposalStore.update((currentFeedback) => {
    //   return currentFeedback.filter((item) => item.id != itemId);
    // });
  };

  const replaceContentToShowClickableLinks = (content) => {
    var exp_match =
      /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    var element_content = content.replace(
      exp_match,
      `<a class="linkInText" href='$1' target="_blank">$1</a>`
    );
    var new_exp_match = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    var new_content = element_content.replace(
      new_exp_match,
      '$1<a class="linkInText" target="_blank" href="http://$2">$2</a>'
    );

    return new_content;
  };

  const handleSubmit = () => {
    alert("I'll handle the submit");
    // if(text.trim().length > min) {
    //   const newFeedback = {
    //     id: uuidv4(),
    //     text,
    //     rating: +rating
    //   }

    //   CultGameProposalStore.update((currentFeedback) => {
    //     return [newFeedback, ...currentFeedback]
    //   })

    //   text = ''
    // }
  };

  const handleSelect = (e) => (rating = e.detail);

  const handleInput = () => {
    alert("I'll handle the submit");
    // if(text.trim().length <= min) {
    //   message = `Text must be at least ${min} characters`
    //   btnDisabled = true
    // } else {
    //   message = null
    //   btnDisabled = false
    // }
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>

  <p class="text-display">
    {@html replaceContentToShowClickableLinks(item.text)}
  </p>

  <p><br /></p>
  {#if mode === "cultGameOfTheDay"}
    <button on:click={() => handleLetsDoIt(item.text)}>Let's Do It</button>
  {:else}
    <button on:click={() => handleVoteRequest(item.id)}
      >Vote As Apprentice</button
    >
  {/if}

  {#if mode === "apprentice"}
    <!-- <form on:submit|preventDefault={handleSubmit}>
      <div class="input-group">
        <input
          type="text"
          on:input={handleInput}
          bind:value={apprenticeKey}
          placeholder="Please enter your Apprentice Key"
        />
      </div>

      {#if apprenticeKey !== ''}
      <RatingSelect on:rating-select={handleSelect} />
      {/if}
    </form> -->
  {/if}
  <a href="https://cultmagazine.org" class="linkInText" style="display: none;">
    you might only understand this if you try to delete it :)
  </a>
</Card>

<style>
  .linkInText {
    color: blue;
  }
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  /* .input-group {
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
  } */
  /* .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  } */
  /* .vote {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  } */
</style>
