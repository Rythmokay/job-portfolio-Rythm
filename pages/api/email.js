// // pages/api/email.js
// import nodemailer from "nodemailer";
// import ContactFormEmail from; // Adjust the path if necessary

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         const { name, email, message } = req.body;

//         // Create a transporter object using your SMTP settings
//         const transporter = nodemailer.createTransport({
//             host: "smtp.example.com", // Replace with your SMTP server
//             port: 587,
//             auth: {
//                 user: "YOUR_EMAIL@example.com", // Your email address
//                 pass: "YOUR_EMAIL_PASSWORD", // Your email password
//             },
//         });

//         // Create the email HTML using the ContactFormEmail component
//         const emailHtml = ContactFormEmail({ message, senderEmail: email });

//         // Set up the email data
//         const mailOptions = {
//             from: email, // Sender's email
//             to: "YOUR_RECEIVER_EMAIL@example.com", // Recipient's email
//             subject: "New message from your portfolio site",
//             html: emailHtml,
//         };

//         // Send the email
//         try {
//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ success: true });
//         } catch (error) {
//             console.error("Error sending email:", error);
//             res.status(500).json({ success: false, error: "Failed to send email" });
//         }
//     } else {
//         res.setHeader("Allow", ["POST"]);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }
