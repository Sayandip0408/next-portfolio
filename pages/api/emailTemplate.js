export const emailTemplate = ({ name, email, phone, subject, message }) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #002B5B; background: linear-gradient(135deg, #4AA4FF, #B575F7); padding: 20px; border-radius: 10px;">
      <h2 style="color: #002B5B; text-align: center;">New Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> <a href='tel:${phone}' style="color: #002B5B;">${phone}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <div style="margin-top: 20px;">
        <h3 style="color: #4AA4FF;">Message:</h3>
        <p style="background-color: rgba(255, 255, 255, 0.9); padding: 15px; border-radius: 5px; border: 1px solid #4AA4FF; color: #002B5B;">${message}</p>
      </div>
      <footer style="margin-top: 30px; color: #002B5B; font-size: 12px; text-align: center;">
        <p>— Portfolio Website | Contact Form Notification | Powered by <a href='https://sayandip-adhikary.vercel.app/' style="color: #B575F7; text-decoration: none;">Sayandip Adhikary</a></p>
      </footer>
    </div>
  `;
};