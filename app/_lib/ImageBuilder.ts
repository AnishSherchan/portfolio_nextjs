import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/_lib/client";

const builder = imageUrlBuilder(client);

export const BuildImageUrl = (img: string) => {
  return builder.image(img).quality(100).url();
};
