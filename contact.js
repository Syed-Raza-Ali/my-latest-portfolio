import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, Subject,  message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "itsrazaalishah303@gmail.com", 
        pass: "nyqgwvimxmuadhwy", 
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'itsrazaalishah303@gmail.com', 
        subject: `New Contact Form Submission from ${name}`,
        html: `
        You Car has been booked on here is your detailed information: 
               <p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Subject: ${Subject}</p>
               <p>Message: ${message}</p>
               `,
      });

      res.status(200).json({ message: 'Your Information is Sended' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}