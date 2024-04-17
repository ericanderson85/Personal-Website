<script>
  import "../app.css";
  import Header from "../lib/Header.svelte"
  import Footer from "../lib/Footer.svelte"


  let isStartingFrame = true;
  let animation = false;


  const startAnimation = () => {
  animation = true;
  setTimeout(function startAnimation(){
    isStartingFrame = false
  }, 1000);}

</script>

{#if isStartingFrame}
<div class="h-1 absolute top-4 bg-black w-0 {animation ? 'extend-right' : ''}" />
<div class="relative flex font-semibold items-center justify-center h-screen w-full">
  <button on:click={startAnimation} class="text-5xl break-keep whitespace-nowrap absolute {animation ? 'move-top-left' : ''}">Eric Anderson</button>
</div>
{:else}
<div class="h-full w-full">
  <Header />
    <slot />
  <Footer />
</div>
{/if}

<svelte:window on:mousewheel={startAnimation}/>