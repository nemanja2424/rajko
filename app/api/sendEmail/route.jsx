import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHOMAIL_HOST || "smtp.zoho.eu",
      port: 587,               // isti kao u Pythonu
      secure: false,           // false za STARTTLS
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS, // app password ako imaš 2FA
      },
      tls: {
        ciphers: "TLSv1.2",   // opcionalno, za sigurnost
      },
    });

    await transporter.verify();
    console.log("SMTP connection OK ✅");

    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: "info.transporterllc@gmail.com",
      subject: `Transporter Chauffeurs — New Message from ${name || "Website Visitor"}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err?.message || String(err) }),
      { status: 500 }
    );
  }
}
