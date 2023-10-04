// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('API route hit'); // Log API hit

  // Logging environment variables (ensure they are not logged in production for security)
  console.log('Env vars:', process.env.EMAIL_USERNAME, process.env.EMAIL_PASSWORD); 

  if (req.method === 'POST') {
    const { fullName, email, phoneNumber, procedures, preferredContactMethod, message } = req.body;

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    // Set up email data
    let mailOptions = {
      from: email,
      to: 'mitsananikone@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nProcedures: ${procedures.join(', ')}\nPreferred Contact Method: ${preferredContactMethod}\nMessage: ${message}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully'); // Log success
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error); // Log error
      res.status(500).send('Error sending email: ' + error.message);
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
