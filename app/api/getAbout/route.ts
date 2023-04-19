import { client } from '../../../lib/sanity-client';
import { AboutPage } from '../../../typings';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

const query = groq`
*[_type == "about"] {
  ...,
  team[]->
}
`;

export async function GET() {
  const about: AboutPage = await client!.fetch(query, {
    next: { revalidate: 60 },
  });
  return NextResponse.json({ about });
}
