<script>
  /** @type {import('./$types').PageProps} */
  let { data } = $props();
</script>

<div class="flex flex-col justify-center items-center">
  <img
    class="w-64 h-64 object-contain"
    src="/{data.ender}.png"
    alt="this is an img"
  />
</div>
