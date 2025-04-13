import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
// import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const request = await req.json();
    // const { name, email, phone, message } = request;
    console.log("req", request);

    // Save to MongoDB
    await connectDB();

    // Using the .save() method
    const newContact = new Contact({ ...request });
    await newContact.save();

    // // Send Email
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_FROM,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // await transporter.sendMail({
    //   from: `"MT Dance" <${process.env.EMAIL_FROM}>`,
    //   to: process.env.EMAIL_TO,
    //   subject: "New Contact Form Submission",
    //   html: `
    //     <h3>New Contact Message</h3>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
