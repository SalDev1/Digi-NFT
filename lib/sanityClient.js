import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "82c4csbd",
  dataset: "production",
  apiVersion: "2021-10-21",
  token: `${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
  useCdn: false,
});
