<script>
  import Process from "./modules/process.svelte";
  import { getRandomIntInclusive } from "$lib/index";
  import sets from "$lib/datasets.json";
</script>

<div class="flex flex-col items-center justify-center">
  <p class="text-6xl font-bold">Big Giant Text</p>
  <Process />
</div>

<div class="flex flex-col items-center gap-10 absolute left-10 top-20">
  <p class="text-3xl hover:-rotate-10 hover:animate-pulse">
    It can either come out as text
  </p>
  <div class="flex flex-row">
    <img
      class="object-contain w-50 h-90"
      src="/text1.png"
      alt="text showcase 1"
    />
    <img
      class="object-contain w-50 h-90"
      src="/text2.png"
      alt="text showcase 2"
    />
  </div>
</div>

<div class="flex flex-col items-center gap-10 absolute right-10 top-20">
  <p class="text-3xl hover:rotate-10 hover:animate-pulse">
    Or be a random image!
  </p>
  <div class="flex flex-row">
    <div class="flex flex-col items-center justify-center">
      <img
        class="object-contain w-50 h-50"
        src="/kei.png"
        alt="img showcase 1"
      />
      <p class="text-xl">love kei</p>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img
        class="object-contain w-50 h-50"
        src="/salt.png"
        alt="img showcase 2"
      />
      <p class="text-xl">love salt</p>
    </div>
  </div>
</div>
