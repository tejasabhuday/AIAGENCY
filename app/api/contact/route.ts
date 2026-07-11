import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { name, email, details, budget } = body;

  if (!name || !email || !details) {
    return NextResponse.json(
      { error: 'Name, email, and project details are required.' },
      { status: 400 }
    );
  }

  const smtpUser = process.env.SMTP_USER || '';
  const smtpPass = process.env.SMTP_PASS || '';
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpSecure = process.env.SMTP_SECURE === 'true';

  const htmlBody = `
    <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">
      <div style="background: #09090b; padding: 28px 32px;">
        <h2 style="color: #e5e7eb; margin: 0; font-size: 20px; letter-spacing: -0.5px;">Axon AI — New Scoping Request</h2>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: 700; color: #374151; width: 160px; font-size: 13px;">Full Name</td>
            <td style="padding: 10px 0; color: #09090b; font-size: 14px;">${name}</td>
          </tr>
          <tr style="border-top: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; font-weight: 700; color: #374151; font-size: 13px;">Work Email</td>
            <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
          </tr>
          <tr style="border-top: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; font-weight: 700; color: #374151; font-size: 13px;">Estimated Budget</td>
            <td style="padding: 10px 0; color: #09090b; font-size: 14px;">${budget || 'Not specified'}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="font-weight: 700; color: #374151; font-size: 13px; margin: 0 0 10px;">Project Requirements</p>
          <p style="color: #1f2937; line-height: 1.7; background: #f9fafb; padding: 16px; border-radius: 6px; border: 1px solid #f3f4f6; margin: 0; font-size: 14px; white-space: pre-wrap;">${details}</p>
        </div>
      </div>
      <div style="background: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px; margin: 0;">Sent via Axon AI contact form · Delhi, India</p>
      </div>
    </div>
  `;

  const textBody = `Axon AI — New Scoping Request\n\nName: ${name}\nEmail: ${email}\nBudget: ${budget || 'Not specified'}\n\nProject Requirements:\n${details}`;

  // ── If SMTP credentials are not configured yet, log and return success ──
  const credsMissing =
    !smtpUser ||
    !smtpPass ||
    smtpUser === 'your-email@gmail.com' ||
    smtpPass.startsWith('xxxx');

  if (credsMissing) {
    console.log('\n══════ AXON AI INTAKE (SMTP not configured) ══════');
    console.log(textBody);
    console.log('══════════════════════════════════════════════════\n');
    return NextResponse.json({
      success: true,
      message: 'Intake captured. (Configure SMTP_USER and SMTP_PASS in .env.local to enable email delivery.)',
    });
  }

  // ── Send via configured SMTP ────────────────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"Axon AI" <${smtpUser}>`,
      to: 'tejasabhuday@gmail.com',
      replyTo: email,
      subject: `[Axon AI] New Scoping Request from ${name}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully.' });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    // Save lead to console so it's never lost even if mail fails
    console.error('\n══════ SMTP SEND FAILED ══════');
    console.error('Reason:', message);
    console.log('\n── Lead saved to console ──');
    console.log(textBody);
    console.log('══════════════════════════════\n');

    return NextResponse.json(
      { error: `Email delivery failed: ${message}. Your enquiry was saved on the server.` },
      { status: 500 }
    );
  }
}
