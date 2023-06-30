import { isValidRequest } from '@sanity/webhook';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const secret = process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    console.error('Must be a POST request');
    return res.status(401).json({ message: 'Must be a POST request' });
  }

  if (!isValidRequest(req, secret)) {
    return res.status(401).json({ message: 'Invalid signature' });
  }

  try {
    await res.revalidate(`/masaz`);
    await res.revalidate(`/fryzjer`);
    return res.json({ message: `Revalidated massage and barber page"` });
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' });
  }
}
