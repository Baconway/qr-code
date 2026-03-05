<script>
  import "./layout.css";
  import ico from "$lib/assets/ico.webp";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={ico} /></svelte:head>
{@render children()}
