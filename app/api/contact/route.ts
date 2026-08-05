import { NextResponse } from 'next/server';

import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Resend API key not set');
      return NextResponse.json({ error: 'Resend API key not set' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // 1. Validate data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Send Email via Resend
    const data = await resend.emails.send({
      // ✅ UPDATED: Sender is now enquiry@lead.genreve.in
      from: 'Rain Tree Enquiries <enquiry@lead.genreve.in>',

      // Send to the owner
      to: [process.env.OWNER_EMAIL || 'raintreeresort82@gmail.com'],

      // Reply directly to the customer
      replyTo: email,

      subject: `New Inquiry: ${subject || 'General'}`,
      
      // ✅ UPDATED: Professional Luxury Email UI
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Website Inquiry</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a2e1a;">
            
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 0;">
                  
                  <div style="max-width: 600px; background-color: #ffffff; border-radius: 2px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    
                    <div style="background-color: #1a2e1a; padding: 30px; text-align: center;">
                      <h1 style="color: #d4af37; margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px; text-transform: uppercase; font-family: Georgia, serif;">The Rain Tree</h1>
                      <p style="color: #a3bfa3; margin: 10px 0 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">New Website Inquiry</p>
                    </div>

                    <div style="padding: 40px;">
                      <p style="font-size: 16px; line-height: 1.6; color: #444444; margin-bottom: 30px;">
                        You have received a new message from your website contact form.
                      </p>

                      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; width: 120px; font-weight: bold; color: #d4af37;">Name</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #d4af37;">Email</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333;">
                            <a href="mailto:${email}" style="color: #1a2e1a; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #d4af37;">Phone</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333;">${phone || 'Not Provided'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #d4af37;">Subject</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333;">${subject}</td>
                        </tr>
                      </table>

                      <div style="background-color: #f9f9f9; padding: 25px; border-left: 4px solid #d4af37; border-radius: 0 4px 4px 0;">
                        <h3 style="margin: 0 0 15px 0; font-size: 14px; color: #666666; text-transform: uppercase; letter-spacing: 1px;">Message Content</h3>
                        <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #333333;">${message}</p>
                      </div>

                      <div style="margin-top: 35px; text-align: center;">
                        <a href="mailto:${email}" style="display: inline-block; background-color: #d4af37; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 2px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Reply to Customer</a>
                      </div>

                    </div>

                    <div style="background-color: #f4f4f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0; font-size: 12px; color: #888888;">
                        This email was sent via the <strong>The Rain Tree Resort</strong> website.
                      </p>
                      <p style="margin: 10px 0 0 0; font-size: 11px; color: #aaaaaa;">
                        Powered by <strong style="color: #d4af37;">Genreve Team</strong> Tech Solutions.
                      </p>
                    </div>

                  </div>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}