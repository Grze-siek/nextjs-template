import { client } from '../../../lib/sanity-client';
import { HomePage } from '../../../typings';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

const query = groq`
*[_type == "home"] {
  ...,
  products[] ->
}
`;

export async function GET(request: Request) {
  const home: HomePage = await client!.fetch(query);
  return NextResponse.json({ home });
}
