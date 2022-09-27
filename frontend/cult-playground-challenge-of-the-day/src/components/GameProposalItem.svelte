<script>
  import { CultGameProposalStore } from "../stores";
  import Card from "./Card.svelte";
  export let item;

  const handleDelete = (itemId) => {
    CultGameProposalStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id != itemId);
    });
  };

  const replace_content = (content) => {
    var exp_match =
      /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    var element_content = content.replace(exp_match, `<a class="linkInText" href='$1' target="_blank">$1</a>`);
    var new_exp_match = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    var new_content = element_content.replace(
      new_exp_match,
      '$1<a class="linkInText" target="_blank" href="http://$2">$2</a>'
    );
    return new_content;
  };
</script>

<Card>
  
  <div class="num-display">
    {item.rating}
  </div>

  <!-- <button class="close" on:click={() => handleDelete(item.id)}>X</button> -->
  <p class="text-display">
    {@html replace_content(item.text)}
  </p>

  
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

  /* .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  } */
</style>
