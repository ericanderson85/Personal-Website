<script>
  import { fade } from "svelte/transition";
  import { quadInOut } from "svelte/easing";

  $: fadeParams = {
    delay: 500,
    duration: 1000,
    easing: quadInOut,
  };

</script>

<header class="fixed w-[calc(100vw-3rem)] top-4 z-40 h-16 flex flex-col">
  <div class="h-1 bg-black mb-1" />
  <nav class="flex justify-between lg:gap-x-52">
    <a href="/" class="md:text-lg
    text-md font-bold">Eric Anderson</a>
    <a in:fade={fadeParams} href="/#about" class="md:text-lg
    text-md font-bold">About</a>
    <a in:fade={fadeParams} href="/#projects" class="md:text-lg
    text-md font-bold">Projects</a>
    <a in:fade={fadeParams} href="/#contact" class="md:text-lg
    text-md font-bold lg:ml-auto">Contact</a>
  </nav>
</header>
