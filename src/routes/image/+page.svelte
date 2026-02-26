<script>
  /** @type {import('./$types').PageProps} */
  let { data } = $props();
</script>

<div class="flex flex-col justify-center items-center min-h-screen">
  <img
    class="w-lg h-lg object-contain"
    src="/{data.ender}.png"
    alt="this is an img"
  />
</div>
