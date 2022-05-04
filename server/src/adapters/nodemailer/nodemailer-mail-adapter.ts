import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f70fbe016dc5ad",
    pass: "07e0f664c38331"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Fidget <oi@fedget.com>',
      to: 'Victor Borzaquel <victorborzaquel@outlook.com>',
      subject,
      html: body
    })
  }
}
