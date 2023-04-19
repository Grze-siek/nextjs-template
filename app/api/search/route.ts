import { NextApiRequest, NextApiResponse } from 'next';
import Fuse from 'fuse.js';
import { client } from '../../../lib/sanity-client';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';
import { AboutPage, HomePage, Product } from '../../../typings';

interface Data {
  products: Product[];
  home: HomePage;
  about: AboutPage;
}

const query = groq`
  *[_type == "product" || _type == "about" || _type == "home"] {
    _type,
    name,
    description,
    landingTitle,
    shortLandingDescription,
    aboutDescription,
    productDescription,
    lastSectionDescription,
    lastSectionSmallText,
    team[] -> {name, description}
  }
`;

export async function GET(req: NextRequest, res: NextApiResponse<string>) {
  const q = req.nextUrl.searchParams.get('q');
  console.log(q);

  const data = await client!.fetch(query);

  if (!q || q.length === 0) {
    return NextResponse.json({ data });
  }

  // create Fuse instance and search
  const fuse = new Fuse<any>(data, {
    keys: [
      'landingTitle',
      'shortLandingDescription',
      'aboutDescription',
      'productDescription',
      'lastSectionDescription',
      'lastSectionSmallText',
      'description',
      'name',
    ],
    includeScore: false,
    threshold: 0.4,
    ignoreLocation: true,
  });

  const results = fuse
    .search(q.toString())
    .map((result) => {
      const matchingEntries = Object.entries(result.item)
        .filter(
          ([key, value]) =>
            value !== null &&
            String(value).toLowerCase().includes(q.toLowerCase())
        )
        .map(([key, value]) => [key, value]);

      if (matchingEntries.length === 0) {
        return null;
      }

      const resultObject = {
        _type: result.item._type,
        ...Object.fromEntries(matchingEntries),
      };

      if (result.item._type === 'product') {
        resultObject.name = result.item.name;
      }

      return resultObject;
    })
    .filter((result) => result !== null);

  console.log(results);

  return NextResponse.json({ results });
}
