import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, subject, message } = body;

        const data = await resend.emails.send({
            from: fromEmail,
            to: ["andremt2003@gmail.com", email],
            subject: subject,
            react: (
                <>
                    <div>
                        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>SUBJECT: {subject}</h1>
                        <p style={{ color: 'black' }}>Thank you for contacting me!</p>
                        <p style={{ color: 'black' }}>I will get back to you as soon as possible.</p>
                        <div style={{ height: '2em' }}></div> {/* Add two-line space */}
                        <p style={{ color: 'blue' }}>USER MESSAGE: {message}</p> {/* Change color of the user message */}
                    </div>

                </>
            ),
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
