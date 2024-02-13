import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "7a0iwsdp",
    dataset: "deliveyecomerce",
    useCdn: true,
    apiVersion: "2021-10-21"
})


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// sanity cors add http://localhost:3333

export default client;