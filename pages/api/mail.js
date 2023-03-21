import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    console.log(req.body);

    const message = `
    Name: ${req.body.formData.fullname}\r\n
    Email: ${req.body.formData.email}\r\n
    Message: ${req.body.formData.message}
    `;

    const data = {
        to: req.body.toEmail,
        from: "2020.sarvesh.patil@ves.ac.in",
        subject: `New Message from ${req.body.formData.fullname} via your portfolio`,
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
