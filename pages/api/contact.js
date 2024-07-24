import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configura el transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true', // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Envía el correo
      await transporter.sendMail({
        from: `"Formulario de contacto PROTARGET" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO, // Dirección de correo que recibirá los mensajes
        subject: `Nuevo mensaje de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        html: `<p><strong>Nombre:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensaje:</strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, error: 'Error al enviar el correo' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}