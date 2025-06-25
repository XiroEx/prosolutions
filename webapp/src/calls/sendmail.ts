const SENDMAIL_URL = 'https://us-central1-georgeanthonycrm.cloudfunctions.net/sendmail'

export interface SendMailData {
  email: string
  subject: string
  message: string
}

export async function sendmail(data: SendMailData): Promise<void> {
  const res = await fetch(SENDMAIL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: data.email,
      subject: data.subject,
      message: data.message,
      alias: 'info@prosolutionlogistics.com'
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to send email')
  }
}
