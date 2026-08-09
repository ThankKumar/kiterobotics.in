

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Kite Robotics Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `📩 New Contact Form – ${name}`,
      text: `
Name   : ${name}
Email  : ${email}
Phone  : ${phone}

Message:
${message}
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Mail Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Mail sending failed",
      }),
      { status: 500 }
    );
  }
}
