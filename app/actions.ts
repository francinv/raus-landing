'use server';

import * as mailer from '@sendgrid/mail';
import { MailUser } from '@/types';

export async function sendMail(user: MailUser) {
  mailer.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to: user.email,
    from: 'hei@raustfellesskap.no',
    subject: 'Tusen takk for din registrering!',
    html: `<strong>Hei ${user.name}!</strong> Tusen takk for at du registrerte deg hos oss.`,
  };

  await mailer
    .send(msg)
    .then(() => console.log('Mail sent'))
    .catch(() => 'Mail failed to send');
}
