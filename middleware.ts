import mailChannelsPlugin from '@cloudflare/pages-plugin-mailchannels'

export const onRequest = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: 'ACME Support', email: 'jeiel.benedito@gmail.com' }],
    },
  ],
  from: {
    name: 'ACME Support',
    email: 'support@example.com',
  },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: '/thank-you' },
    }),
})
