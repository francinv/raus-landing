'use server';

import * as mailer from '@sendgrid/mail';
import { MailUser } from '@/types';

export async function sendMail(user: MailUser) {
  mailer.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to: user.email,
    from: 'hei@raustfellesskap.no',
    subject: 'Tusen takk for din registrering!',
    html: `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Raus - Vi lar ikke tidsklemma vinne!</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: auto; padding: 20px; background: #fff; }
                .content { color: #314528; }
                .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #aaa; }
                .signature { margin-top: 20px; color: #314528; }
            </style>
            </head>
            <body>
            <div class="container">
                <div class="content">
                    <h2>Hei!</h2>
                    <p>Tusen takk for at du viste interesse. Foreløpig er dette kun en markedsundersøkelse for å skape den aller beste løsningen for dere.</p>
                    <p>Vi gleder oss til dagen vi lanserer! I mellomtiden tar vi gjerne kontakt med deg for å høre hva du kunne tenke deg fra oss.</p>
                    <p>Vårt løfte er at vi ikke skal gi oss før vi kan tilby noe som dekker deres behov!</p>
                </div>
                <div class="signature">
                    <p>God hilsen,</p>
                    <p>Francin, Lisa, Renate og Nora i Team Raus</p>
                    <img src="https://raustfellesskap.no/Logo.png" alt="Raus logo" width="100">
                </div>
                <div class="footer">
                    <p>Dette er en automatisk generert e-post.</p>
                </div>
            </div>
            </body>
            </html>
    `,
  };

  await mailer
    .send(msg)
    .then(() => console.log('Mail sent'))
    .catch(() => 'Mail failed to send');
}
