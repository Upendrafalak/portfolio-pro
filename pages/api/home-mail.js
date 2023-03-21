import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    console.log(req.body);

    const message = `
    Email: ${req.body.formData.email}\r\n
    Message: ${req.body.formData.message}
    `;

    const data = {
        to: "sarvesh2902@gmail.com",
        from: "2020.sarvesh.patil@ves.ac.in",
        subject: `New msg Portfolio Contact Form`,
        text: message,
        html: message.replace(/\r\n/g, "<br>"),
    };

    try {
        await mail.send(data);
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({ status: "ok" });
}
