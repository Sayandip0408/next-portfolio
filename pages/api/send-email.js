import nodemailer from 'nodemailer';
import { emailTemplate } from '../helper/emailTemplate';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !subject || !email || !phone || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.TO_MAIL_ID,
                subject,
                html: emailTemplate({ name, email, phone, subject, message }),
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
