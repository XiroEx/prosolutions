const URL = 'https://contact-ldgqw3kyla-uc.a.run.app'

export interface ContactFormData {
  name: string
  email: string
  message: string
  service?: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'Pro Solutions',
      message: `Client interested in: ${data.service || 'General Inquiry'}\n\n${data.message}`,
      name: data.name,
      email: data.email,
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to submit contact form')
  }
}

