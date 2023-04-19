import { client } from '../../../lib/sanity-client';
import { Product } from '../../../typings';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  try {
    const name =
      req.url &&
      new URL(req.url, `http://${req.headers.host}`).searchParams.get('name');

    if (!name) {
      const query = groq`
      *[_type == "product"] {
        ...,
      }
    `;
      const products: Product[] = await client!.fetch(query);
      return NextResponse.json({ products });
    }
    const query = groq`
      *[_type == "product" && name == $name][0] {
        ...,
      }
    `;
    const product: Product = await client!.fetch(query, { name });
    return NextResponse.json({ product });
  } catch (error) {
    console.log('Error:', error);
    return NextResponse.error();
  }
}
