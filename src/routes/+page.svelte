<script>
  import Process from "./modules/process.svelte";
  import { getRandomIntInclusive } from "$lib/index";
  import sets from "$lib/datasets.json";
</script>

<div class="flex flex-col items-center justify-center">
  <p class="text-6xl font-bold">Big Giant Text</p>
  <!--<Process />-->
</div>

<div class="flex absolute left-10 top-20 -rotate-10">
  <p>It can either come out as text</p>
</div>

<div class="flex absolute right-10 top-20 rotate-10">
  <p>Or be a random image!</p>
</div>
