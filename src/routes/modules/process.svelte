<script>
  import qrcode from "qrcode-generator";
  import sets from "$lib/datasets.json";
  import { getRandomIntInclusive } from "$lib";

  const ChosenType = sets.Available[getRandomIntInclusive(0, 1)];
  const ReturnItem =
    sets[ChosenType][getRandomIntInclusive(0, sets[ChosenType].length - 1)];

  const code = qrcode(0, "M");

  switch (ChosenType) {
    case "Text":
      code.addData(ReturnItem);
      break;
    case "Image":
      code.addData(`https://qrway.vercel.app/image?end=${ReturnItem}`);
      break;
  }
  code.make();

  const img = code.createImgTag(10, 5);
</script>

<div class="mt-20 flex flex-col items-center justify-center align-middle pb-2">
  <p class="text-2xl">
    Scan this QR code to get something! (Not bait I swear!)
  </p>
</div>

<div
  class="flex flex-col items-center justify-center align-middle border-6 border-blue-200 p-2 bg-white"
>
  {@html img}
</div>
