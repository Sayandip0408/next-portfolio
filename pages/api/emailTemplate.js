export const emailTemplate = ({ name, email, phone, subject, message }) => {
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #4F341D;">
        <h2 style="color: #4F341D;">New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> <a href='tel:${phone}'>${phone}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px;">
          <h3 style="color: #b6753c;">Message:</h3>
          <p style="background-color: #FAF4F0; padding: 15px; border-radius: 5px; border: 1px solid #dfdfdf;">${message}</p>
        </div>
        <footer style="margin-top: 30px; color: #4F341D; font-size: 12px;">
          <p>— Portfolio Website | Contact Form Notification | Powered by <a href='https://sayandip-adhikary.vercel.app/'>Sayandip Adhikary</a></p>
        </footer>
      </div>
    `;
};
