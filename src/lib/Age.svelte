<script>
    import { onDestroy } from 'svelte';
    import { onMount } from 'svelte';
  
    const millisecondsInAYear = 31557600000;
    let age;
    const birthDate = new Date("2005-05-15");
  
    function calculateAge() {
      const now = new Date();
      const ageDiffMs = now - birthDate;
      age = (ageDiffMs / millisecondsInAYear).toFixed(8);
    }

    const interval = setInterval(() => {
        calculateAge();
    }, 315.36);

    onDestroy(() => {
        clearInterval(interval);
    });

    onMount(() => {
      calculateAge();
    });
  </script>
  
  <span class="md:text-xl
  font-normal text-lg font-mono">{age}</span>
  