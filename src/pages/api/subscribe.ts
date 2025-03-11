import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

// Create a transporter for sending email
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other email services if you like
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER, // Use environment variable for security
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Use environment variable for security
  },
});

// API handler to handle the subscription
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }

    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'ianmuriuki.inc@gmail.com', // Receiver address
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed with the email: ${email}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
