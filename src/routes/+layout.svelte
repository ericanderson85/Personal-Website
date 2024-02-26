<script>
  import "../app.css";
  import Header from "../lib/Header.svelte"
  import Footer from "../lib/Footer.svelte"
</script>

<div class="h-full w-full">
  <Header />
    <slot />
  <Footer />
</div>
