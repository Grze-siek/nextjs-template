import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
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

  const signature = Array.isArray(req.headers[SIGNATURE_HEADER_NAME])
    ? req.headers[SIGNATURE_HEADER_NAME][0]
    : req.headers[SIGNATURE_HEADER_NAME];

  if (!signature) {
    return res.status(401).json({ message: 'Invalid signature' });
  }
  const isValid = isValidSignature(JSON.stringify(req.body), signature, secret);

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid signature' });
  }

  try {
    await res.revalidate(`/`);
    console.log(`===== Revalidating: home page`);
    return res.json({ message: `Revalidated home page"` });
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' });
  }
}
