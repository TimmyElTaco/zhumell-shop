import nodemailer from 'nodemailer';

export default async function emailConfirmation({ email, name, token }) {
    
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS
        }
    });

    const info = await transporter.sendMail({
        from: 'Zhumell Clone Website',
        to: email,
        subject: 'Confirm your account',
        text: 'Confirm yout account in Zhumell Clone Website',
        html: `
            <h2>Confirm your account</h2>
            <p>
                Hi ${name}, to confirm your account in the <strong>Zhumell Clone Website</strong> just go to <a href='${process.env.FRONTEND_URL}/login/confirm/${token}'>this website</a>.            
            </p>
            <p>
                If you don't create this account just ignore this email.
            </p>
        `
    });
}