// src/pages/api/advertsform.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { title, organization, email, deadline, description } = req.body;
  if (!title || !organization || !email || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user: process.env.NEXT_PUBLIC_EMAIL_USER, 
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS
         },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL,
    subject: `New Advert Submission: ${title}`,
    text: `Organization: ${organization}\nEmail: ${email}\nDeadline: ${deadline || 'N/A'}\nDescription: ${description}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Advert submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}