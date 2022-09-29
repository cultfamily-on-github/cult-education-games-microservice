<script>
  
  import Card from "./Card.svelte";
  import Countdown from "./Countdown.svelte";
  export let item;

  let validOnUTCYear = item.utcDate.split("-")[0]
  let validOnUTCMonth = item.utcDate.split("-")[1].split("-")[0]
  let validOnUTCDayte = item.utcDate.substr(item.utcDate.length-2, 2)
  let validOnUTCTime = new Date(Date.UTC(validOnUTCYear, validOnUTCDayte, validOnUTCMonth, 23, 59, 59)).getTime()

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

</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>

  <Countdown deadline={validOnUTCTime}></Countdown>

  <p><br></p>
  
  <p class="text-display">
    {@html replaceContentToShowClickableLinks(item.text)}
  </p>

  <p><br /></p>

    <button on:click={() => handleLetsDoIt(item.text)}>Let's Do It</button>

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

</style>
