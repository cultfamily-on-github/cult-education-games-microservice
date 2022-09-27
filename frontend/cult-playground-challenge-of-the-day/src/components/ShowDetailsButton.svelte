<script>
  export let onChange;
  export let type = 'button'
  export let disabled = false
  export let showDetails = false
  
  $: onChange(showDetails)

  function clickShowDetails() {
    showDetails = !showDetails
  }
  
</script>

<button {type} {disabled} on:click={clickShowDetails}>
  <slot></slot>
</button>


<style>
  button {
    color: black;
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    cursor: pointer;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled{
    background-color: #cccccc;
    color: #333;
    cursor:auto;
  }

  button:disabled:hover{
    transform:scale(1);
    opacity: 1;
  }

</style>