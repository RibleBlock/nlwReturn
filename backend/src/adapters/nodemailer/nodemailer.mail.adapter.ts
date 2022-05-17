import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail.adapter';

// nodemailer & mailtrap.io configuracao
const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '388e49c1284885',
    pass: 'ba27cac1f5202b',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    // nodemailer & mailtrap.io envio
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'RIquelme Aparecido <riquelmeaparecido08@gmail.com>',
      subject,
      html: body,
    });
  }
}
