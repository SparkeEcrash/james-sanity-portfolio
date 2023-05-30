// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == "experience"]{
  ...,
  jobs[]-> {
    "imageUrl": image.asset->url,
    ...,
    techs[]-> {
      ...,
      "imageUrl": image.asset->url,
    }
  }
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
