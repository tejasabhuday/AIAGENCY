import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, details, budget } = body;

  try {
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: 'Name, email, and details are required.' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"Axon AI Intake" <${process.env.SMTP_USER || email}>`,
      to: 'tejasabhuday@gmail.com',
      replyTo: email,
      subject: `New Scoping Intake Request from ${name}`,
      text: `
Intake details for Axon AI:

Full Name: ${name}
Work Email: ${email}
Estimated Budget: ${budget || 'Not specified'}

Project Requirements:
------------------------------------------
${details}
------------------------------------------
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #09090b; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Axon AI Scoping Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; color: #09090b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Work Email:</td>
              <td style="padding: 8px 0; color: #09090b;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Estimated Budget:</td>
              <td style="padding: 8px 0; color: #09090b;">${budget || 'Not specified'}</td>
            </tr>
          </table>
          <h3 style="color: #4b5563; border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px;">Project Requirements</h3>
          <p style="color: #09090b; line-height: 1.6; white-space: pre-wrap; background: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #f3f4f6;">${details}</p>
        </div>
      `,
    };

    // If credentials are empty, log to console and return success
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || process.env.SMTP_USER.includes('your-email')) {
      console.log('--- FALLBACK INTAKE LOGGED TO CONSOLE (SMTP credentials missing/default) ---');
      console.log(mailOptions.text);
      console.log('--------------------------------------------------------------------------');
      return NextResponse.json({
        success: true,
        message: 'Intake logged in console fallback (SMTP details unconfigured).',
      });
    }

    // Try to send real email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Intake logged and email sent successfully.' });

  } catch (error: any) {
    // If mail sending fails, print details to console so lead is not lost, and return 200 state fallback
    console.error('--- SMTP AUTHENTICATION OR SEND FAILED ---');
    console.error('Error Details:', error.message || error);
    console.log('\n--- LEAD DETAILS SAVED TO CONSOLE ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Budget: ${budget || 'Not specified'}`);
    console.log(`Details:\n${details}`);
    console.log('------------------------------------\n');

    return NextResponse.json({
      success: true,
      message: `Intake form captured locally. (Email sending failed: ${error.message || 'SMTP Authentication failure'})`,
    });
  }
}
