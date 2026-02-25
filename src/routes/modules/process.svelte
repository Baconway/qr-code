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
      code.addData(`http://localhost:5173/image?end=${ReturnItem}`);
      console.log(`http://localhost:5173/image?end=${ReturnItem}`);
      //code.addData(`https://qrway.vercel.app/image?end=${ReturnItem}`);
      break;
  }
  code.make();

  const img = code.createImgTag(10, 5);
</script>

<div>{@html img}</div>
