// Vercel Serverless Function
// Configurá INSTAGRAM_ACCESS_TOKEN en el dashboard de Vercel
// (Project Settings -> Environment Variables)

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')

  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!token) {
    res.status(503).json({ error: 'Instagram API not configured', posts: [] })
    return
  }

  try {
    const url = new URL('https://graph.instagram.com/me/media')
    url.searchParams.set('fields', 'id,media_type,media_url,permalink,caption,thumbnail_url,timestamp')
    url.searchParams.set('access_token', token)
    url.searchParams.set('limit', '12')

    const apiRes = await fetch(url.toString())
    const data = await apiRes.json()

    if (data.error) {
      res.status(500).json({ error: data.error.message, posts: [] })
      return
    }

    const posts = (data.data || []).map((p) => ({
      id: p.id,
      media_type: p.media_type,
      media_url: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url,
      permalink: p.permalink,
      caption: p.caption || '',
      timestamp: p.timestamp,
    }))

    // Cache CDN-friendly: 5 min fresh, 10 min stale-while-revalidate
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    res.status(200).json({ posts })
  } catch (err) {
    res.status(500).json({ error: err.message, posts: [] })
  }
}
