import { createServer } from '../scriptserver'; // ici scriptserver.js est ton backend
import { VercelRequest, VercelResponse } from '@vercel/node';

const app = createServer();

export default function handler(req, res) {
  return app(req, res);
}

export const config = {
  api: {
    bodyParser: false, // nécessaire pour Stripe Webhooks
  },
};
