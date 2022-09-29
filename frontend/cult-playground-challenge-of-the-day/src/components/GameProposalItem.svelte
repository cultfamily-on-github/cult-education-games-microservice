<script>
  import { CultGames } from "../stores";
  import Card from "./Card.svelte";
  import Countdown from "./Countdown.svelte";
  import RatingSelect from "./RatingSelect.svelte";
  export let item;

  let text = "";
  let apprenticeKey = "";
  let rating = 10;

  // let validOnUTCYear = item.utcDate.split("-")[0]
  // let validOnUTCMonth = item.utcDate.split("-")[1].split("-")[0]
  // let validOnUTCDayte = item.utcDate.substr(item.utcDate.length-2, 2)
  // let validOnUTCTime = new Date( Date.UTC(validOnUTCYear, validOnUTCDayte, validOnUTCMonth, 23, 59, 59) ).getTime()

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

    // CultGames.update((currentFeedback) => {
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

    //   CultGames.update((currentFeedback) => {
    //     return [newFeedback, ...currentFeedback]
    //   })

    //   text = ''
    // }
  };

  const handleSelect = (e) => (rating = e.detail);

  const handleInput = () => {
    // alert("nice try :) you can't be a master here yet because this playground is just getting started.");
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>

  <p><br></p>
  
  <p class="text-display">
    {@html replaceContentToShowClickableLinks(item.text)}
  </p>

  <p><br /></p>
    <button on:click={() => handleVoteRequest(item.id)}
      >Vote As Apprentice</button
    >

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


</Card>

<style>
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
