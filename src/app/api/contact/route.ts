import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const request = await req.json();

    // Save to MongoDB
    await connectDB();

    const newContact = new Contact({ ...request });
    await newContact.save();
    // console.log("✅ Saved Contact:", savedContact);
    // // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MT Dance with Fitness World" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${request?.name}</p>
        <p><strong>Email:</strong> ${request?.email}</p>
        <p><strong>Phone:</strong> ${request?.phone}</p>
        <p><strong>Message:</strong> ${request?.message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Saved successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
