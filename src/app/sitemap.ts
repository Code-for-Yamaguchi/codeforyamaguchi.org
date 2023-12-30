import { url } from '@/constants/metadata'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${url}`,
    },
    {
      url: `${url}/events`,
    },
    {
      url: `${url}/about`,
    },
    {
      url: `${url}/members`,
    },
  ]
}
