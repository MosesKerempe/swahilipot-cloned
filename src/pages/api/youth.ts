import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  education: string;
  skills: string;
  interests: string;
  location: string;
  howHeard: string;
  agreeTerms: boolean;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const formData: FormData = req.body;

  // Validate required fields
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'skills',
    'interests',
    'location',
    'howHeard',
    'agreeTerms',
  ];

  for (let field of requiredFields) {
    if (!formData[field as keyof FormData]) {
      return res.status(400).json({ message: `Missing required field: ${field}` });
    }
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER, // Use your verified sender email
    to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL, // Fixed typo (RECIPENT_EMAIL → RECIPIENT_EMAIL)
    subject: 'New Youth Form Submission',
    html: `
      <h2>Youth Form Submission</h2>
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Date of Birth:</strong> ${formData.dob}</p>
      <p><strong>Gender:</strong> ${formData.gender}</p>
      <p><strong>Education Level:</strong> ${formData.education}</p>
      <p><strong>Skills:</strong> ${formData.skills}</p>
      <p><strong>Interests:</strong> ${formData.interests}</p>
      <p><strong>Location:</strong> ${formData.location}</p>
      <p><strong>How Did You Hear About Us:</strong> ${formData.howHeard}</p>
      <p><strong>Agreed to Terms:</strong> ${formData.agreeTerms ? 'Yes' : 'No'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
};

export default handler;
