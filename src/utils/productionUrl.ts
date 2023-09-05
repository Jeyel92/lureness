/**
 * This plugin sets up the "Open preview (CTRL + ALT + O)" in the dropdown menu that hosts
 * other actions like "Review changes" and "Inspect"
 * @TODO the code in this plugin is a candidate for moving into `@sanity/preview-kit/studio`
 */

import { definePlugin, type Slug } from 'sanity'

import { getPreviewSecret } from './previewSecret'

export const productionUrl = definePlugin<{
  previewSecretId: `${string}.${string}`
  types: string[]
  apiVersion?: string
}>(({ previewSecretId, types: _types, apiVersion = '2022-11-17' }) => {
  if (!previewSecretId) {
    throw new TypeError('`previewSecretId` is required')
  }
  if (!previewSecretId.includes('.')) {
    throw new TypeError(
      '`previewSecretId` must contain a `.` to ensure it can only be queried by authenticated users',
    )
  }
  if (!_types || _types.length === 0) {
    throw new TypeError('`types` is required')
  }
  const types = new Set(_types)
  return {
    name: 'productionUrl',
    document: {
      productionUrl: async (prev, { document, getClient }) => {
        const url = new URL('/api/draft', location.origin)

        const client = getClient({ apiVersion })
        const secret = await getPreviewSecret({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          client: client as any,
          id: previewSecretId,
          createIfNotExists: true,
        })
        if (secret) {
          url.searchParams.set('secret', secret)
        }
        const slug = (document.slug as Slug)?.current
        if (slug) {
          url.searchParams.set('slug', slug)
        }

        if (types.has(document._type)) {
          url.searchParams.set('type', document._type)
          console.log('Open preview URL', url.toString())
          return url.toString()
        }

        return prev
      },
    },
  }
})
