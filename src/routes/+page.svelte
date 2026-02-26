<script>
  import Process from "./modules/process.svelte";
  import { getRandomIntInclusive } from "$lib/index";
  import sets from "$lib/datasets.json";
</script>

<div class="flex flex-col items-center justify-center">
  <p class="text-6xl font-bold">Big Giant Text</p>
  <Process />
</div>

<div class="flex flex-col gap-2 absolute left-10 top-20 hover:animate-pulse">
  <p class="text-3xl hover:-rotate-10">It can either come out as text</p>
  <img src="" alt="text showcase 1" />
  <img src="" alt="text showcase 2" />
</div>

<div class="flex flex-col gap-2 absolute right-10 top-20 hover:animate-pulse">
  <p class="text-3xl hover:-rotate-10">Or be a random image!</p>
  <img src="" alt="img showcase 1" />
  <img src="" alt="img showcase 2" />
</div>
