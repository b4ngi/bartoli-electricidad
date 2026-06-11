// Netlify Function
// Configurá INSTAGRAM_ACCESS_TOKEN en Site settings -> Environment variables

exports.handler = async (event) => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!token) {
    return {
      statusCode: 503,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Instagram API not configured', posts: [] }),
    }
  }

  try {
    const url = new URL('https://graph.instagram.com/me/media')
    url.searchParams.set('fields', 'id,media_type,media_url,permalink,caption,thumbnail_url,timestamp')
    url.searchParams.set('access_token', token)
    url.searchParams.set('limit', '12')

    const apiRes = await fetch(url.toString())
    const data = await apiRes.json()

    if (data.error) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: data.error.message, posts: [] }),
      }
    }

    const posts = (data.data || []).map((p) => ({
      id: p.id,
      media_type: p.media_type,
      media_url: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url,
      permalink: p.permalink,
      caption: p.caption || '',
      timestamp: p.timestamp,
    }))

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300, s-maxage=300',
      },
      body: JSON.stringify({ posts }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message, posts: [] }),
    }
  }
}
