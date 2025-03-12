import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, phone, interest, message } = req.body;

  // Basic validation for required fields
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  // Create a Nodemailer transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email provider here
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,  // Gmail account email (set in .env.local)
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,  // Gmail app password or password (set in .env.local)
    },
  });

  // Setup email data
  const mailOptions = {
    from: email,  // Sender's email (from the form input)
    to: 'ianmuriuki.inc@gmail.com',  // Receiver email
    subject: `You have a new submission from ${firstName} ${lastName}`,
    html: `
      <h3>New Form Submission</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Area of Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,  // HTML body content
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
