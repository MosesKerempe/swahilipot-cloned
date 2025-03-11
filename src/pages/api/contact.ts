import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter using your email service (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or any email service you're using
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email address
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your email password
      },
    });

    // Set up email data
    const mailOptions = {                                                                                      
      from: email,
      to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL, // The recipient email address - receiving emails.
      subject: `New message from: ${name} - ${subject}`,
      text: `
        You have received a new message from the contact form:

        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
