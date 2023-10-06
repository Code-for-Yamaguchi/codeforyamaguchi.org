import { MetadataRoute } from 'next'
import { url } from './layout'

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
