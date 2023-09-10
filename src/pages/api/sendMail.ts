import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const data = req.body
  // const id = await createItem(data)
  //
  const send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        { to: [{ email: 'jeiel.benedito@gmail.com', name: 'Test Recipient' }] },
      ],
      from: {
        email: 'sender@example.com',
        name: 'Test Sender',
      },
      subject: 'Test Subject',
      content: [
        {
          type: 'text/plain',
          value: 'Test message content\n\n',
        },
      ],
    }),
  })

  const resp = await fetch(send_request)
  const respText = await resp.text()

  res.status(200).json(respText)
}
